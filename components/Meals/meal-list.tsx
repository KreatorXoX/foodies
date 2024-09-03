import React from "react";
import MealItem from "./meal-item";
import { Meal } from "@/lib/meals";

type Props = {
  meals: Meal[];
};

const MealList = ({ meals }: Props) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-6">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem meal={meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealList;
