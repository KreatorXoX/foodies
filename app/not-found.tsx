import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 px-10 w-full text-center">
      <h1 className="text-5xl font-extrabold font-serif tracking-wider text-red-200">
        404 Not Found
      </h1>
      <p className="text-2xl text-amber-100 text-center">
        Unfortunately, we could not find the requested page or resource you are
        looking for !
      </p>
    </div>
  );
};

export default NotFound;
