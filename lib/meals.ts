import sql from "better-sqlite3";
import fs from "node:fs";
const db = sql("meals.db");

export type Meal = {
  id?: string;
  creator_email: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  instructions: string;
};

export type FormMeal = {
  creator_email: string;
  title: string;
  slug: string;
  image: File;
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

export const saveMeal = async (meal: FormMeal) => {
  const extension = meal.image.type.split("/")[1];
  const fileName = `${meal.slug}.${extension}`;
  const path = `public/images/${fileName}`;

  const stream = fs.createWriteStream(path);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) throw new Error("Error writing file");
  });

  const convertedMeal: Meal = { ...meal, image: `/images/${fileName}` };
  db.prepare(
    "INSERT INTO meals (creator_email, title, slug, image, summary, creator, instructions) VALUES (@creator_email, @title, @slug, @image, @summary, @creator, @instructions)"
  ).run(convertedMeal);
};
