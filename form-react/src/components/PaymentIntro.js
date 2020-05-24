import React, { useState } from "react";
import styles from "./PaymentIntro.module.css";

export default function PaymentIntro(props) {
  return (
    <article className={styles.paymentIntro}>
      <div>
        <h2>Almost there!</h2>
        <h2>Please choose a payment method</h2>
      </div>
      {props.children}
    </article>
  );
}