import React, { useState, useEffect, useRef } from "react";
import styles from "./Select_beer.modules.css";
import { Heroku } from "../modules/Heroku";
import EachBeer from "./EachBeer.js";
import ShoppingCart from "./ShoppingCart.js";
import Popup from "./Popup.js";
import BottleLoader from "./BottleLoader";

export default function SelectBeer(props) {
  const [info, setData] = useState([]);
  const [name, setName] = useState("");
  const [selected, setSelected] = useState({});
  const [desc, setDesc] = useState([]);

  const [toggleInfoBox, setToggleInfoBox] = useState(false);

  useEffect(() => {
    Heroku.getData(setData, "taps");
  }, []);
  useEffect(() => {
    Heroku.getBeerTypes(setDesc);
  }, []);
  function getOrders(orders) {
    console.log(orders);
    props.getOrders(orders);
  }

  function selectingBeer(beers) {
    setSelected(beers);
  }
  //create the new array
  const beers = info.map(function (item) {
    return item.beer;
  });
  //filter the new array and make sure the same beer doesn't show twice
  const oneOfEachBeer = beers.filter(function (item, index) {
    return beers.indexOf(item) >= index;
  });
  function onInfoClick(n) {
    console.log(n);
    if (name === n) {
      setName(undefined);
      setToggleInfoBox(false);
    } else {
      setName(n);
      setToggleInfoBox(true);
      console.log(toggleInfoBox);
    }
  }

  function onClose() {
    setName(undefined);
    setToggleInfoBox(false);
  }

  return (
    <>
      <ShoppingCart
        beer={selected}
        getOrders={getOrders}
        state={props.state}
        orderSentBack={props.orderSentBack}
      />
      <main id="select_beer_main">
        {info.length === 0 && <BottleLoader />}
        {info.length !== 0 && (
          <div>
            <h1 id="chooseBeer">Choose your favorite beer!</h1>
          </div>
        )}

        <article id="selection-of-beers">
          <Popup
            desc={desc}
            beer={name}
            popUp={toggleInfoBox}
            onClose={onClose}
          />

          {oneOfEachBeer.map((data) => (
            <EachBeer
              key={data}
              name={data}
              //desc={desc}
              popUp={onInfoClick}
              amountOfBeer={selectingBeer}
            />
          ))}
        </article>
      </main>
    </>
  );
}
