"use client";

import Link from "next/link";
import Image from "next/image";

import { Meal, deleteMeal } from "@/lib/actions";

type Props = {
  meal: Meal;
};

const MealItem = ({ meal }: Props) => {
  const deleteMealHandler = () => {
    // if (meal.id) deleteMeal(meal.id);
    // else console.log("No id found");

    if (meal.slug) deleteMeal(meal.slug, meal.public_id);
    else console.log("No slug found");
  };

  return (
    <article
      className={
        "flex flex-col justify-start rounded-md shadow-md overflow-hidden transition bg-gradient-to-tl from-blue-800 to-indigo-900  max-w-[14rem] h-full"
      }
    >
      <header>
        <div className="relative h-32 md:h-48">
          <Image
            priority
            src={meal.image as string}
            alt={meal.title}
            fill
            className="w-full"
            style={{ objectFit: "cover" }}
            sizes={"(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"}
          />
        </div>
        <div className="px-4 mt-4 font-extrabold tracking-wider">
          <h2>{meal.title}</h2>
          <p className="italic text-sm text-slate-300 font-serif">
            by {meal.creator}
          </p>
        </div>
      </header>
      <div className={"flex flex-col justify-between h-full text-slate-200"}>
        <p className={"px-4 pt-4 line-clamp-3"}>{meal.summary}</p>
        <div
          className={
            "p-4 text-center md:text-right flex justify-between items-center"
          }
        >
          <Link
            href={`/meals/${meal.slug}`}
            className="text-white inline-block mt-4 px-2 py-1 rounded-md bg-red-700  hover:bg-red-900 transition"
          >
            View Details
          </Link>
          <button className="text-red-500" onClick={deleteMealHandler}>
            X
          </button>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
