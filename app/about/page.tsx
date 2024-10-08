import PageWrapper from "@/components/page-wrapper";
import React from "react";

type Props = {};

const AboutUsPage = (props: Props) => {
  return (
    <PageWrapper>
      <section className="pt-20 md:pt-32 md:pb-20 w-full flex flex-col lg:gap-10 items-center pb-4">
        About Us
      </section>
    </PageWrapper>
  );
};

export default AboutUsPage;
