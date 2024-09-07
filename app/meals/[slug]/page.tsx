import PageWrapper from "@/components/page-wrapper";
import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const meal = await getMeal(params.slug);

  if (!meal) {
    notFound();
  }
  return {
    title: `${meal.title} | Foodsies`,
    description: `This is a detailed view of ${meal.title} recipe created by ${meal.creator}`,
  };
}

const MealDetailPage = async ({ params }: Props) => {
  const meal = await getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  const instructions = meal.instructions
    .split("\n")
    .map((instruction, index) => (
      <p key={index} className="font-sans pb-1">
        {instruction}
      </p>
    ));

  return (
    <PageWrapper>
      <section className="pt-20 md:pt-32 md:pb-20 w-full flex flex-col gap-10 items-center pb-4">
        <div className="flex sm:justify-start gap-5 sm:gap-10 w-full sm:flex-row flex-col items-center sm:items-start">
          <div className="relative w-[20rem] h-[16rem] md:h-[20rem]">
            <Image
              src={meal.image as string}
              fill
              alt={meal.title}
              className="rounded-xl"
              sizes={"(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"}
            />
          </div>
          <div className="flex flex-col gap-2 items-center sm:items-start">
            <h1 className="text-3xl font-bold ">{meal.title}</h1>
            <p className="text-lg text-gray-400 pb-2">
              by{" "}
              <span className="text-blue-400 italic font-extrabold underline">
                <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
              </span>
            </p>
            <p className="text-lg text-gray-400 italic">{meal.summary}</p>
          </div>
        </div>
        <div className="text-gray-200 font-bold p-6 rounded-md bg-gradient-to-tl from-blue-800/60 to-indigo-900/60 w-full">
          {instructions}
        </div>
      </section>
    </PageWrapper>
  );
};

export default MealDetailPage;
