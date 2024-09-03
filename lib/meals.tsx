import sql from "better-sqlite3";

const db = sql("meals.db");

export type Meal = {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  instructions: string;
};

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const meals = db.prepare("SELECT * FROM meals").all();
  return meals as Meal[];
};

export const getMeal = async (slug: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  return meal as Meal;
};
