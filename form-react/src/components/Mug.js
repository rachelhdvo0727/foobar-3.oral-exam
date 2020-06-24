import React from "react";
import styles from "./Mug.modules.css";

export default function Mug(props) {
  let imgName = props.name.toLowerCase();
  let label = imgName.split(" ").join("");
  console.log(props.name);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 230 275"
    >
      <g id="Layer_1" data-name="Layer 1">
        <g>
          <path
            className="mug-1"
            d="M3.4,2.52H176.64V263.09s-90.14,21.12-173.24,0Z"
          />
          {(props.name !== "Fairy Tale Ale" ||
            props.name !== "GitHop" ||
            props.name !== "Hoppily Ever After" ||
            props.name !== "Row 26" ||
            props.name !== "Steampunk" ||
            props.name !== "Mowintime" ||
            props.name !== "Hollaback Lager") && (
            <path
              id="Path_99"
              data-name="Path 99"
              className="mug-2"
              d="M17.44,84.78c38.86-.14,77.71-.19,116.57-.45,19.46-.12,31,5.49,31.24,21.65.73,44.32-1.54,88.29-15.07,131.79-5.57,17.94-17.78,24.26-40.86,23.38-24.48-.93-50.63,7.29-86.09-7.93C11.75,194.88,11.91,144.14,17.44,84.78Z"
            />
          )}
          {(props.name === "Fairy Tale Ale" ||
            props.name === "GitHop" ||
            props.name === "Hoppily Ever After") && (
            <path
              id="Path_99"
              data-name="Path 99"
              // className="mug-2"
              fill="#6D2D20"
              d="M17.44,84.78c38.86-.14,77.71-.19,116.57-.45,19.46-.12,31,5.49,31.24,21.65.73,44.32-1.54,88.29-15.07,131.79-5.57,17.94-17.78,24.26-40.86,23.38-24.48-.93-50.63,7.29-86.09-7.93C11.75,194.88,11.91,144.14,17.44,84.78Z"
            />
          )}
          {(props.name === "Mowintime" || props.name === "Hollaback Lager") && (
            <path
              id="Path_99"
              data-name="Path 99"
              // className="mug-2"
              fill="#BF820F"
              d="M17.44,84.78c38.86-.14,77.71-.19,116.57-.45,19.46-.12,31,5.49,31.24,21.65.73,44.32-1.54,88.29-15.07,131.79-5.57,17.94-17.78,24.26-40.86,23.38-24.48-.93-50.63,7.29-86.09-7.93C11.75,194.88,11.91,144.14,17.44,84.78Z"
            />
          )}
          {props.name === "Row 26" && (
            <path
              id="Path_99"
              data-name="Path 99"
              // className="mug-2"
              fill="#000000"
              d="M17.44,84.78c38.86-.14,77.71-.19,116.57-.45,19.46-.12,31,5.49,31.24,21.65.73,44.32-1.54,88.29-15.07,131.79-5.57,17.94-17.78,24.26-40.86,23.38-24.48-.93-50.63,7.29-86.09-7.93C11.75,194.88,11.91,144.14,17.44,84.78Z"
            />
          )}
          {props.name === "Steampunk" && (
            <path
              id="Path_99"
              data-name="Path 99"
              // className="mug-2"
              fill="#BF7245"
              d="M17.44,84.78c38.86-.14,77.71-.19,116.57-.45,19.46-.12,31,5.49,31.24,21.65.73,44.32-1.54,88.29-15.07,131.79-5.57,17.94-17.78,24.26-40.86,23.38-24.48-.93-50.63,7.29-86.09-7.93C11.75,194.88,11.91,144.14,17.44,84.78Z"
            />
          )}
          <path
            id="Path_100"
            data-name="Path 100"
            className="mug-3"
            d="M153.86,83.86,45.13,83.77C29.64,77.92,15.26,72.13,16.52,50.66c1.36-23.28,18.07-22.8,34-25.72a53.72,53.72,0,0,0,20.79-8.7c25.36-18,49.9-10.9,71.13,5.16C163.38,37.24,161.5,60.87,153.86,83.86Z"
          />
          <path
            className="mug-4"
            d="M16.13,7s63.8,16.7,145.5,0C161.63,7,87.09,50,16.13,7Z"
          />
          {(props.name !== "Fairy Tale Ale" ||
            props.name !== "GitHop" ||
            props.name !== "Hoppily Ever After" ||
            props.name !== "Row 26" ||
            props.name !== "Steampunk" ||
            props.name !== "Mowintime" ||
            props.name !== "Hollaback Lager") && (
            <path
              className="mug-5"
              d="M14.34,250.33s63.8,16.7,145.5,0C159.84,250.33,85.3,293.27,14.34,250.33Z"
            />
          )}
          {(props.name === "Fairy Tale Ale" ||
            props.name === "GitHop" ||
            props.name === "Hoppily Ever After") && (
            <path
              fill="#6D2D20"
              d="M14.34,250.33s63.8,16.7,145.5,0C159.84,250.33,85.3,293.27,14.34,250.33Z"
            />
          )}
          {(props.name === "Mowintime" || props.name === "Hollaback Lager") && (
            <path
              fill="#BF820F"
              d="M14.34,250.33s63.8,16.7,145.5,0C159.84,250.33,85.3,293.27,14.34,250.33Z"
            />
          )}
          {props.name === "Row 26" && (
            <path
              fill="#000000"
              d="M14.34,250.33s63.8,16.7,145.5,0C159.84,250.33,85.3,293.27,14.34,250.33Z"
            />
          )}
          {props.name === "Steampunk" && (
            <path
              fill="#BF7245"
              d="M14.34,250.33s63.8,16.7,145.5,0C159.84,250.33,85.3,293.27,14.34,250.33Z"
            />
          )}
          <image
            width="808"
            height="926"
            transform="translate(20.39 76.37) scale(0.17)"
            xlinkHref={`${process.env.PUBLIC_URL}/labels/${label}.png`}
          />
          <path
            className="mug-6"
            d="M162.79,9.41s-11.85,7.9-20.94,10.28V251.21s16.79-2.46,21.13-5.62Z"
          />
          <path
            className="mug-7"
            d="M9.35,7S26,20.71,46,24.78v228s-25-2-36.11-6.4Z"
          />
          <path
            className="mug-8"
            d="M107.69,27.42s13.92-.93,21.11-3.94V252.14s-13.22,2.08-23,1.62V27.42Z"
          />
          <path
            className="mug-1"
            d="M159.38,65.6h55.39s11.82,2.31,11.82,23.1V215.45s.72,17.66-12.37,17.66c-10.61,0-54.84.45-54.84.45s-3.76-8.09-.29-15.89h45.58s7,2,7-13V88.84s-.29-10.16-5.2-10.16H159.67S156.2,73.55,159.38,65.6Z"
          />
          <path
            className="mug-7"
            d="M161.07,66.31s-4.86,6,0,11.77C161.07,78.08,159.68,70.52,161.07,66.31Z"
          />
          <path
            className="mug-7"
            d="M161.55,219.18s-5.47,6.7,0,13.26C161.55,232.44,160,223.92,161.55,219.18Z"
          />
          <path
            className="mug-8"
            d="M162.56,66.48h49.62s13.22,2.57,13.22,18.71V215.45h-6.18V85.71S218.7,72,209.09,72H162.73S160.57,69.8,162.56,66.48Z"
          />
          <path
            className="mug-7"
            d="M163,226.74h50.79s5.76-.66,5.76-8.74h5.31s1.11,14.28-14.06,14.28H163A6.89,6.89,0,0,1,163,226.74Z"
          />
        </g>
      </g>
    </svg>
  );
}
