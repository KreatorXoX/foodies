import React from "react";
import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

import PageWrapper from "@/components/page-wrapper";

type Props = {};

const CommunityPage = (props: Props) => {
  return (
    <PageWrapper>
      <section className="pt-20 lg:pt-32 md:pb-20 w-full flex flex-col lg:gap-10 items-center pb-4">
        <header
          className={
            "text-center text-2xl lg:text-5xl flex flex-col gap-5 font-serif"
          }
        >
          <h1>
            One shared passion:{" "}
            <span
              className={
                "bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent font-extrabold"
              }
            >
              Food
            </span>
          </h1>
          <p className="text-base lg:text-lg">
            Join our community and share your favorite recipes!
          </p>
        </header>
        <main
          className={
            "text-center lg:text-xl font-bold pt-10 lg:pt-20 w-full  flex flex-col items-center justify-center"
          }
        >
          <h2 className="text-xl lg:text-3xl font-extrabold pb-10 underline decoration-red-500">
            Community Perks
          </h2>

          <ul
            className="w-full flex flex-col lg:flex-row lg:justify-evenly lg:gap-5
          bg-gradient-to-r from-blue-800 to-indigo-900 rounded-md pb-4
          "
          >
            <li className=" flex flex-col items-center">
              <div className="relative h-36 w-36 md:w-48 md:h-48">
                <Image src={mealIcon} fill alt="A delicious meal" />
              </div>
              <p>Share & discover recipes</p>
            </li>
            <li className=" flex flex-col items-center">
              <div className="relative h-36 w-36 md:w-48 md:h-48">
                <Image
                  src={communityIcon}
                  fill
                  alt="A crowd of people, cooking"
                />
              </div>
              <p>Find new friends & like-minded people</p>
            </li>
            <li className=" flex flex-col items-center">
              <div className="relative h-36 w-36 md:w-48 md:h-48">
                <Image
                  src={eventsIcon}
                  fill
                  alt="A crowd of people at a cooking event"
                />
              </div>
              <p>Participate in exclusive events</p>
            </li>
          </ul>
        </main>
      </section>
    </PageWrapper>
  );
};

export default CommunityPage;
