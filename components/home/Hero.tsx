import React from "react";
import HeroImg from "../../public/home/desktop/image-hero-phone.png";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero}>
        <div className={styles.hero_details}>
          <div className={styles.hero_text}>
            <h2>Award-winning custom designs and digital branding solutions</h2>
            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
          </div>
          <button className={`${styles.btn} ${styles.btn_hero}`}>
            learn more
          </button>
        </div>
        <div className={styles.circular_div}>
          <svg width="640" height="639" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
                <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
                <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
              </linearGradient>
            </defs>
            <circle
              fill="url(#a)"
              transform="matrix(0 -1 -1 0 640 640)"
              cx="320"
              cy="320"
              r="320"
              fillRule="evenodd"
              opacity=".309"
            />
          </svg>
        </div>
        <div className={styles.hero_image}>
          <Image src={HeroImg} alt="heroImg" className={styles.phone_img} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
