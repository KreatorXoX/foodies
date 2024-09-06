import fs from "node:fs";
import sql from "better-sqlite3";
import { Meal } from "./actions";

const db = sql("meals.db");

export type FormMeal = {
  creator_email: string;
  title: string;
  slug: string;
  image: File;
  summary: string;
  creator: string;
  instructions: string;
};

/* await new Promises are there to emulate the loading states since bettersql doesnt return a promise */

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const meals = db.prepare("SELECT * FROM meals").all();
  return meals as Meal[];
};

export const getMeal = async (slug: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  return meal as Meal;
};

export const saveMeal = async (meal: Meal) => {
  db.prepare(
    "INSERT INTO meals (creator_email, title, slug, image, public_id, summary, creator, instructions) VALUES (@creator_email, @title, @slug, @image, @public_id, @summary, @creator, @instructions)"
  ).run(meal);
};

export const removeMeal = async (slug: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const meal = db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as Meal;

  if (!meal) {
    throw new Error("Meal not found");
  }

  db.prepare("DELETE FROM meals WHERE slug = ?").run(slug);
};
