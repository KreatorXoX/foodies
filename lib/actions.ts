"use server";
import { redirect } from "next/navigation";
import { FormMeal, saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

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
  } as FormMeal;

  try {
    await saveMeal(meal);
    revalidatePath("/meals");
    return { message: null };
  } catch (error) {
    return { message: "Error creating meal" };
  }
};
