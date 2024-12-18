import Image from "next/image";
import React from "react";
import styles from "./About.module.css";
import passionate from "../../public/home/desktop/illustration-passionate.svg";
import resourceful from "../../public/home/desktop/illustration-resourceful.svg";
import friendly from "../../public/home/desktop/illustration-friendly.svg";

const About = () => {
  return (
    <section className={styles.about_section}>
      <div className={styles.about}>
        <div className={styles.about_div}>
          <Image
            src={passionate}
            alt="passionate"
            className={styles.about_image}
          />
          <div className={styles.about_details}>
            <h6>passionate</h6>
            <p>
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>
        <div className={styles.about_div}>
          <Image
            src={resourceful}
            alt="resourceful"
            className={styles.about_image}
          />
          <div className={styles.about_details}>
            <h6>resourceful</h6>
            <p>
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>
        <div className={styles.about_div}>
          <Image src={friendly} alt="friendly" className={styles.about_image} />
          <div className={styles.about_details}>
            <h6>friendly</h6>
            <p>
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
