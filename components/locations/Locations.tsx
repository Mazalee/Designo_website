import React from "react";
import styles from "./Locations.module.css";
import { locationsData } from "../data";

const Locations = () => {
  return (
    <section>
      <div className={styles.locations}>
        {locationsData.map((data) => (
          <div
            key={data.id}
            className={`${
              data.id % 2 !== 0
                ? styles.locations_content
                : styles.locations_content_2
            }`}
          >
            <div
              className={`${
                data.id % 2 !== 0
                  ? styles.locations_image_div
                  : styles.locations_image_div_2
              }`}
            >
              <picture>
                <source srcSet={data.MDSsrc} media="(min-width: 1024px)" />
                <source srcSet={data.tabletSrc} media="(min-width: 768px)" />
                <img
                  src={data.MDSsrc}
                  alt={data.alt}
                  className={styles.locations_image}
                />
              </picture>
            </div>

            <div
              className={`${
                data.id % 2 !== 0
                  ? styles.locations_details
                  : styles.locations_details_2
              }`}
            >
              <h2>{data.header}</h2>
              <div className={styles.locations_details_wrapper}>
                <div className={styles.locations_details_inner}>
                  <p>{data.paragraphOne}</p>
                  <p>{data.spanOne}</p>
                  <p>{data.spanTwo}</p>
                </div>
                <div className={styles.locations_details_inner}>
                  <p>{data.paragraphTwo}</p>
                  <p>{data.spanThree}</p>
                  <p>{data.spanFour}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.space}></div>
    </section>
  );
};

export default Locations;
