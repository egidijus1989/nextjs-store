import React from "react";

const AboutPage = () => {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        We love
        <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
          store
        </span>
      </h1>
      <p className="mt-+ text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        best store that was, best store that is, best store that will be
      </p>
    </section>
  );
};

export default AboutPage;
