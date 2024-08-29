import React from "react";

type Props = { children: React.ReactNode };

const PageWrapper = ({ children }: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20 py-32">
      {children}
    </main>
  );
};

export default PageWrapper;
