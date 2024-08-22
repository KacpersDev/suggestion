"use client";
import Header from "./components/header/Header";
import Body from "./components/body/Body";

import { useState } from "react";

export default function Home() {
  const [currentButton, setCurrentButton] = useState("Suggestions");

  return (
    <>
      <Header
        currentButton={currentButton}
        setCurrentButton={setCurrentButton}
      />
      <Body currentButton={currentButton} />
    </>
  );
}
