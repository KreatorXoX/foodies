"use server";

import { revalidatePath } from "next/cache";

import { v2 as cloudinary } from "cloudinary";

import { removeMeal, saveMeal } from "./meals";
import { redirect } from "next/navigation";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export type Meal = {
  id?: string;
  creator_email: string;
  title: string;
  slug: string;
  image: string | File;
  public_id: string;
  summary: string;
  creator: string;
  instructions: string;
};

export const addNewMeal = async (
  prevState: { message: string | null },
  formData: FormData
) => {
  // Extract the form data
  const title = formData.get("title") as string | null;
  const summary = formData.get("summary") as string | null;
  const instructions = formData.get("instructions") as string | null;
  const image = formData.get("image") as File | null;
  const creator = formData.get("name") as string | null;
  const creatorEmail = formData.get("email") as string | null;

  // Basic validation
  if (!title || title.trim() === "") {
    return { message: "Title is required" };
  }

  if (!summary || summary.trim() === "") {
    return { message: "Summary is required" };
  }

  if (!instructions || instructions.trim() === "") {
    return { message: "Instructions are required" };
  }

  if (!image) {
    return { message: "Image is required" };
  }

  // File type validation (check if image is of type jpeg and png)
  const validImageTypes = ["image/jpeg", "image/png"];
  if (!validImageTypes.includes(image.type)) {
    return { message: "Invalid image type. Only JPEG, PNG are allowed." };
  }

  if (!creator || creator.trim() === "") {
    return { message: "Creator name is required" };
  }

  if (!creatorEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(creatorEmail)) {
    return { message: "Valid email is required" };
  }

  const meal = {
    title,
    slug: title.toLowerCase().replace(/\s+/g, "-"),
    summary,
    instructions,
    image,
    creator,
    creator_email: creatorEmail,
  } as Meal;

  try {
    const imageFile = image;
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            tags: ["meals-images"],
            folder: "meals",
          },
          async function (error, result) {
            if (error) {
              reject(error);
              return;
            }
            meal.image = result!.secure_url;
            meal.public_id = result!.public_id;

            await saveMeal(meal);
            resolve(result);
          }
        )
        .end(buffer);
    });

    revalidatePath("/meals");
  } catch (error: any) {
    return { message: "Error creating meal" };
  }
  redirect("/meals");
  return { message: null };
};

export const deleteMeal = async (slug: string, public_id: string) => {
  try {
    await cloudinary.uploader.destroy(public_id, async (error, result) => {
      if (error) {
        console.error("Error deleting image:", error);
        return;
      }
      console.log("Image deleted successfully:", result);
      await removeMeal(slug);
    });
  } catch (error) {
    console.error("Error deleting image:", error);
    throw error;
  }
  revalidatePath("/meals");
};
