import React from "react";

type Props = {};

const MealLoadingPage = (props: Props) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center w-full gap-10 ">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid border-t-transparent border"></div>
      <h1 className="animate-pulse italic font-extrabold text-2xl">
        Getting your Meal...{" "}
      </h1>
    </div>
  );
};

export default MealLoadingPage;
