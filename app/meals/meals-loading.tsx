import React from "react";

type Props = {};

const MealsLoadingIndicator = (props: Props) => {
  return (
    <div className="pt-20 flex flex-col justify-center items-center w-full gap-10 ">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid border-t-transparent border"></div>
      <h1 className="animate-pulse italic font-extrabold">
        Fetching the Meals...{" "}
      </h1>
    </div>
  );
};

export default MealsLoadingIndicator;
