"use client";

import React from "react";
import { useFormState } from "react-dom";

import FormSubmitButton from "@/components/Meals/meal-form-submit-button";
import MealPicker from "@/components/Meals/meal-picker";
import PageWrapper from "@/components/page-wrapper";

import { addNewMeal } from "@/lib/actions";

type Props = {};

const SharePage = (props: Props) => {
  const [state, formAction] = useFormState(addNewMeal, { message: null });

  return (
    <PageWrapper>
      <section className="pt-20 md:pt-32 md:pb-20 w-full flex flex-col items-center lg:items-start lg:flex-row gap-10 pb-4">
        <header className={" text-lg font-sans lg:text-4xl space-y-3"}>
          <h1 className="flex flex-col items-center lg:items-start">
            <span>Share your </span>
            <span
              className={
                "italic text-nowrap font-extrabold text-3xl md:text-5xl text-yellow-600"
              }
            >
              favorite meal
            </span>
          </h1>
          <p className="lg:text-2xl text-left g:text-center">
            {" "}
            Or any other meal you feel needs sharing!
          </p>
        </header>
        <div
          className={
            " text-gray-950 w-full text-xs sm:text-sm md:text-lg max-w-xl mx-auto"
          }
        >
          <form
            action={formAction}
            className={
              "flex relative flex-col w-full gap-4  md:border md:border-yellow-600 px-4 md:px-10 py-10 rounded-md "
            }
          >
            {state.message && (
              <div className="absolute top-2 left-4 text-red-500 italic text-sm font-semibold">
                {"*** "}
                {state.message}
              </div>
            )}
            <div className={"flex flex-row justify-between items-center"}>
              <MealPicker />

              <FormSubmitButton />
            </div>
            <div className={"flex flex-col sm:flex-row justify-between gap-4"}>
              <div className="w-full">
                <label
                  className="block uppercase font-bold text-gray-300"
                  htmlFor="name"
                >
                  Your name
                </label>
                <input
                  className=" focus:outline-yellow-500 focus:bg-gray-300 block w-full py-1 px-2 rounded-md bg-gray-200"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block uppercase font-bold text-gray-300"
                >
                  Your email
                </label>
                <input
                  className=" focus:outline-yellow-500 focus:bg-gray-300 block w-full py-1 px-2 rounded-md bg-gray-200"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="title"
                className="block uppercase font-bold text-gray-300"
              >
                Title
              </label>
              <input
                className=" focus:outline-yellow-500 focus:bg-gray-300 block w-full py-1 px-2 rounded-md bg-gray-200"
                type="text"
                id="title"
                name="title"
                required
              />
            </div>
            <div>
              <label
                className="block uppercase font-bold text-gray-300"
                htmlFor="summary"
              >
                Short Summary
              </label>
              <input
                className=" focus:outline-yellow-500 focus:bg-gray-300 block w-full py-1 px-2 rounded-md bg-gray-200"
                type="text"
                id="summary"
                name="summary"
                required
              />
            </div>
            <div>
              <label
                className="block uppercase font-bold text-gray-300"
                htmlFor="instructions"
              >
                Instructions
              </label>
              <textarea
                className=" focus:outline-yellow-500 focus:bg-gray-300 block w-full py-1 px-2 rounded-md bg-gray-200"
                id="instructions"
                name="instructions"
                rows={5}
                required
              ></textarea>
            </div>
          </form>
        </div>
      </section>
    </PageWrapper>
  );
};

export default SharePage;
