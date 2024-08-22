"use client";

import { FC } from "react";

interface ButtonManager {
  currentButton: any;
  setCurrentButton: any;
}

const Header: FC<ButtonManager> = ({ currentButton, setCurrentButton }) => {
  return (
    <div className="flex justify-center mt-[150px] space-x-[200px]">
      <button
        className={
          currentButton === "Suggestions"
            ? "text-[17px] font-bold"
            : "text-[17px]"
        }
        onClick={() => setCurrentButton("Suggestions")}
      >
        Suggestions
      </button>
      <button
        className={
          currentButton === "YourSuggestions"
            ? "text-[17px] font-bold"
            : "text-[17px]"
        }
        onClick={() => setCurrentButton("YourSuggestions")}
      >
        Your Suggestions
      </button>
    </div>
  );
};

export default Header;
