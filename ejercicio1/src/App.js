import React from "react";
import Año from "./components/Año";

export default function App() {

  const getYear = () => {
    return new Date().getFullYear();
  }

  return (
    <>
      <Año año={getYear} />
    </>
  )
}