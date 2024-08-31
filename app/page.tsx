import PageWrapper from "@/components/page-wrapper";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      <section className="h-screen  pt-32 pb-20 w-full flex flex-col justify-start gap-10 md:justify-evenly md:flex-row text-md sm:text-lg lg:text-2xl">
        <div className="w-full ">Image Slider</div>
        <div className=" w-full flex flex-col items-center justify-center gap-7 md:gap-10 lg:gap-20">
          <div className="font-bold tracking-wider text-center md:text-left">
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
                href={"/community"}
                className="lg:px-4 px-1 py-1 bg-orange-500 rounded-lg hover:bg-orange-700 transition text-center sm:min-w-[8rem] lg:min-w-[12rem]"
              >
                Our Community
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
