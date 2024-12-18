"use client";

import React from "react";
import Link from "next/link";
import { cardData } from "../data";
import styles from "./Design.module.css";

const Design = () => {
  return (
    <section className={styles.design_section}>
      <div className={styles.design}>
        {cardData.map(
          ({
            id,
            mobileSrc,
            tabletSrc,
            desktopSrc,
            alt,
            headerOne,
            headerTwo,
            icon,
            href,
          }) => (
            <div key={id} className={styles.design_div}>
              <div className={styles.design_div_card}>
                <picture>
                  <source srcSet={desktopSrc} media="(min-width: 1024px)" />
                  <source srcSet={tabletSrc} media="(min-width: 768px)" />
                  <img src={mobileSrc} alt={alt} className={styles.card_image} />
                </picture>
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.image_text}>
                <h1>{headerOne}</h1>
                <Link href={href}>
                  <div className={styles.design_click}>
                    <h2>{headerTwo}</h2>
                    {icon}
                  </div>
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Design;
