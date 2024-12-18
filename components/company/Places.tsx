"use client";

import React from "react";
import { placesData } from "../data";
import styles from "./Places.module.css";

const Places = () => {
  return (
    <section>
      <div className={styles.places}>
        {placesData.map((data) => (
          <div key={data.id} className={styles.places_content}>
            <div className={styles.places_image}>
              <img src={data.src} alt={data.alt} />
            </div>

            <div className={styles.places_details}>
              <h6>{data.title}</h6>
              <button>{data.button}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Places;
