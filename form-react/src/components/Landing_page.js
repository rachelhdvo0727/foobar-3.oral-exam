import React from "react";
import { Button } from "muicss/react";
import styles from "./Landingpage.modules.css";

export default function Landing_page() {
  window.addEventListener("DOMContentLoaded", start);

  function start() {
    // loadSvg();
  }
  //   async function loadSvg() {
  //     const response = await fetch();
  //     const mySVG = await response.text();
  //     document.querySelector(".svg").innerHTML = mySVG;
  //   }

  return (
    <main>
      <svg></svg>
      <div className="wrapper-vertical">
        <h1>Welcome to Foobar!</h1>
        <Button className="button">Order now</Button>
      </div>
    </main>
  );
}
