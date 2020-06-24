import React from "react";
import styles from "./Popup.modules.css";
import Keg from "./Keg.js";

export default function Popup(props) {
  let desc = props.desc.filter((desc) => desc.name === props.beer);

  return (
    <>
      {props.popUp && (
        <article className="popup">
          <button
            onClick={(e) => {
              props.onClose();
            }}
            className="popup-toggle"
          >
            X
          </button>
          {desc[0] !== undefined && (
            <>
              <div className="keg-popup">
                <Keg name={desc[0].name} category={desc[0].category} />
              </div>
              <h2>{desc[0].name}</h2>
              <h3>Category: {desc[0].category} </h3>
              <h4>Alc. {desc[0].alc} %</h4>
              <p>{desc[0].description.overallImpression}</p>
            </>
          )}
        </article>
      )}
    </>
  );
}
