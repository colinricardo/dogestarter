import Image from "next/image";
import { useState } from "react";
import MessageBlock from "@/components/MessageBlock";

const ITEMS = [
  "typescript",
  "nextJS",
  "tailwind 3",
  "light/dark mode (click doge)",
  "load config from .env",
  "nextJS API routes",
  "nextJS image component",
  "custom 404 page",
  "responsive breakpoint",
  "absolute import paths",
  "swr",
  "todo: full ssr",
];

const renderList = () => {
  return (
    <div className="flex flex-col items-center">
      {ITEMS.map((i) => (
        <div key={i}>{i}</div>
      ))}
    </div>
  );
};

const Index = () => {
  const [darkModeOn, setDarkModeOn] = useState(false);

  const handleDogeClick = () => {
    setDarkModeOn(!darkModeOn);
  };

  const renderHeader = () => {
    return (
      <div
        onClick={handleDogeClick}
        className="flex flex-col items-center cursor-pointer"
      >
        <Image
          src="/images/cooldoge.png"
          layout="intrinsic"
          width="160px"
          height="160px"
        />
        <div className="mb-4" />
        <h1 className="text-xlarge">NextJS Starter App </h1>
        <MessageBlock />
      </div>
    );
  };

  const render = () => {
    return (
      <div className={darkModeOn ? "dark" : "light"}>
        <div className="bg-background dark:bg-background-dark text-primaryContrast dark:text-primaryContrast-dark">
          <div className="flex flex-col items-center justify-center w-screen h-screen text-center sm:flex sm:flex-row sm:space-x-32 sm:align-center">
            {renderHeader()}
            {renderList()}
          </div>
        </div>
      </div>
    );
  };

  return render();
};

export default Index;
