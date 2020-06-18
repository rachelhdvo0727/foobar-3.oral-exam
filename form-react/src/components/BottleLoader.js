import React from "react";
import { ReactSVG } from "react-svg";
import SpinningBottle from "../svgs/bottle_loading.svg";
import { useMediaPredicate } from "react-media-hook";

export default function BottleLoader(props) {
  const mobileScreen = useMediaPredicate("(max-width: 400px)");
  const tabletScr = useMediaPredicate("(min-width: 768px");
  const biggerScreen = useMediaPredicate("(min-width: 1000px)");

  return (
    <>
      <div
        style={{
          margin: "30vh auto",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {mobileScreen && (
          <ReactSVG
            src={SpinningBottle}
            style={{
              alignSelf: "center",
              placeSelf: "center",
              paddingLeft: "23vw",
            }}
            afterInjection={(error, svg) => {
              if (error) {
                console.error(error);
                return;
              }
              svg.setAttribute("width", "28%");
            }}
          />
        )}
        {tabletScr && (
          <ReactSVG
            src={SpinningBottle}
            style={{
              alignSelf: "center",
              placeSelf: "center",
              paddingLeft: "10vw",
            }}
            afterInjection={(error, svg) => {
              if (error) {
                console.error(error);
                return;
              }
              svg.setAttribute("width", "40%");
            }}
          />
        )}
        {/* {biggerScreen && (
          <ReactSVG
            src={SpinningBottle}
            style={{
              alignSelf: "center",
              placeSelf: "center",
              paddingLeft: "10vw",
            }}
            afterInjection={(error, svg) => {
              if (error) {
                console.error(error);
                return;
              }
              svg.setAttribute("width", "40%");
            }}
          />
        )} */}
        <h2
          style={{
            alignSelf: "center",
          }}
        >
          Loading ...
        </h2>
      </div>
    </>
  );
}
