import ImageSlideShow from "@/components/image-slider";
import PageWrapper from "@/components/page-wrapper";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      <section className="md:h-screen md:pt-32 pb-20 w-full flex flex-col justify-start gap-10 md:justify-evenly md:flex-row text-md sm:text-lg lg:text-2xl">
        <div className="w-full flex items-center">
          <ImageSlideShow />
        </div>
        <div className=" w-full flex flex-col items-center justify-center gap-7 md:gap-10 lg:gap-20">
          <div className="font-bold tracking-wider text-center md:text-left">
            <div className="pb-3 md:pb-6 uppercase italic text-orange-400 tracking-widest">
              <h2 className="text-4xl">Food heads</h2>
              <h3 className="text-2xl">
                Make & Share the best foods around the world
              </h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              delectus voluptatum illo quod, doloribus, at perspiciatis ex
              reiciendis ipsum eius velit natus quisquam, error sequi deleniti.
              Corporis fugiat consequuntur veritatis!
            </p>
          </div>
          <div className=" w-full flex flex-col gap-2 sm:gap-5 text-sm lg:text-lg">
            <div className="flex items-center justify-evenly">
              <Link
                href={"/about"}
                className="lg:px-4 px-1 py-1 bg-blue-500 rounded-lg hover:bg-blue-700 transition  sm:min-w-[8rem] lg:min-w-[12rem] text-center"
              >
                About Us
              </Link>
              <Link
                href={"/meals"}
                className="lg:px-4 px-1 py-1 bg-orange-500 rounded-lg hover:bg-orange-700 transition text-center sm:min-w-[8rem] lg:min-w-[12rem]"
              >
                Explore Meals
              </Link>
            </div>
            <Link
              href={"/community"}
              className="w-1/2  mx-auto px-4 py-1 bg-red-700 rounded-lg hover:bg-red-900 transition text-center"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
