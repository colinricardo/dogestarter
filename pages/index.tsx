import useSWR from "swr";
import fetcher from "../utils/fetcher";
import Image from "next/image";
import env from "../config/environment";
import { useState } from "react";

const { API } = env;

const ITEMS = [
  "typescript",
  "nextJS",
  "tailwind",
  "light/dark mode (click doge)",
  "load config from .env",
  "nextJS API routes",
  "nextJS image component",
  "custom 404 page",
  "responsive breakpoint",
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

const MessaageBlock = () => {
  const { data, error } = useSWR(`${API}/doge`, fetcher);
  if (error) return <div>Could not load message.</div>;
  if (!data) return <div>Loading message,,,</div>;
  return <div>Message from API: {data.message}</div>;
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
        <MessaageBlock />
      </div>
    );
  };

  const render = () => {
    return (
      <div className={darkModeOn ? "dark" : "light"}>
        <div className="bg-light-background dark:bg-dark-background text-light-primaryContrast dark:text-dark-primaryContrast">
          <div className="flex flex-col sm:flex sm:flex-row sm:space-x-32 sm:align-center w-screen h-screen items-center justify-center text-center">
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
