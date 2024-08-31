import React from "react";

type Props = { children: React.ReactNode };

const PageWrapper = ({ children }: Props) => {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between px-5 md:px-20 max-w-7xl mx-auto">
      {children}
    </main>
  );
};

export default PageWrapper;
