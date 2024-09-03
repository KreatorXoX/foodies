import MealList from "@/components/Meals/meal-list";
import PageWrapper from "@/components/page-wrapper";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import React, { Suspense } from "react";
import MealsLoadingIndicator from "./meals-loading";

type Props = {};

const Meals = async () => {
  const meals = await getMeals();
  return <MealList meals={meals} />;
};

const MealsPage = async (props: Props) => {
  return (
    <PageWrapper>
      <section className="pt-20 md:pt-32 md:pb-20 w-full flex flex-col lg:gap-10 items-center pb-4">
        <header className=" pb-5 px-6 md:px-12 lg:px-24 text-center border-b-2 border-yellow-600">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-200 mb-6">
            Delicious meals, created{" "}
            <span className="italic text-yellow-600">by you</span>
          </h1>
          <p className="text-lg md:text-xl font-serif text-slate-100 mb-4">
            Choose your favorite recipe and cook it yourself. It is easy and
            rewarding to bring a touch of the Renaissance into your kitchen,
            where every meal becomes a masterpiece.
          </p>

          <p className="text-lg md:text-xl font-serif">
            <Link
              href={`/meals/share`}
              className="text-yellow-600 hover:text-yellow-200"
            >
              Share your favorite recipe
            </Link>
          </p>
        </header>

        <main>
          <Suspense fallback={<MealsLoadingIndicator />}>
            <Meals />
          </Suspense>
        </main>
      </section>
    </PageWrapper>
  );
};

export default MealsPage;
