"use server";

import { redirect } from "next/navigation";
import { FormMeal, saveMeal } from "./meals";

export const addNewMeal = async (formData: FormData) => {
  "use server";
  const meal = {
    title: formData.get("title"),
    slug: (formData.get("title") as string).toLowerCase().replace(/\s+/g, "-"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  } as FormMeal;

  await saveMeal(meal);
  redirect("/meals");
};
