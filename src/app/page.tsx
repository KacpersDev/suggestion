"use client";
import Header from "./components/header/Header";
import Body from "./components/body/Body";

import { useState } from "react";

export default function Home() {
  const [currentButton, setCurrentButton] = useState("Suggestions");
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Header
        currentButton={currentButton}
        setCurrentButton={setCurrentButton}
      />
      <Body currentButton={currentButton}/>
    </>
  );
}
