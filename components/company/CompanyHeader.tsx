import React from "react";
import { companyData, companyDataExtra } from "../data";
import styles from "./CompanyHeader.module.css";
import Places from "./Places";

const CompanyHeader = () => {
  return (
    <section>
      {companyData.map((data) => (
        <div key={data.id} className={styles.company_header}>
          <div className={styles.company_header_img}>
            <picture>
              <source srcSet={data.desktopSrc} media="(min-width: 1024px)" />
              <source srcSet={data.tabletSrc} media="(min-width: 768px)" />
              <img
                src={data.mobileSrc}
                alt={data.alt}
                className={styles.company_image}
              />
            </picture>
          </div>
          <div
            className={styles.company_header_details}
            style={{ backgroundColor: data.bgColor, color: data.color }}
          >
            <div className={styles.double_circle}>
              <svg width="584" height="292" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
                    <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
                    <stop
                      stopColor="#5D0202"
                      stopOpacity=".498"
                      offset="100%"
                    />
                  </linearGradient>
                </defs>
                <g fill="url(#a)" fillRule="evenodd" opacity=".06">
                  <circle
                    transform="matrix(1 0 0 -1 0 292)"
                    cx="146"
                    cy="146"
                    r="146"
                  />
                  <circle
                    transform="matrix(0 1 1 0 292 -292)"
                    cx="438"
                    cy="146"
                    r="146"
                  />
                </g>
              </svg>
            </div>
            <div className={styles.company_details}>
              <h2>{data.header}</h2>
              <p>{data.paragraph}</p>
            </div>
          </div>
        </div>
      ))}

      {companyDataExtra.slice(0, 1).map((data) => (
        <div key={data.id} className={styles.company_header_inner}>
          <div
            className={`${
              data.id % 2 === 0
                ? styles.company_header_img
                : styles.company_header_img_2
            }`}
          >
            <picture>
              <source srcSet={data.desktopSrc} media="(min-width: 1024px)" />
              <source srcSet={data.tabletSrc} media="(min-width: 768px)" />
              <img
                src={data.mobileSrc}
                alt={data.alt}
                className={`${
                  data.id % 2 === 0
                    ? styles.company_image
                    : styles.company_image_2
                }`}
              />
            </picture>
          </div>
          <div
            className={`${
              data.id % 2 === 0
                ? styles.company_header_details
                : styles.company_header_details_2
            }`}
            style={{ backgroundColor: data.bgColor, color: data.color }}
          >
            <div className={styles.company_details}>
              <h2 style={{ color: "#e7816b" }}>{data.header}</h2>
              <p>{data.paragraph}</p>
              <p>{data.paragraphTwo}</p>
            </div>
          </div>
        </div>
      ))}

      <Places />

      {companyDataExtra.slice(-1).map((data) => (
        <div key={data.id} className={styles.company_header_inner}>
          <div
            className={`${
              data.id % 2 === 0
                ? styles.company_header_img
                : styles.company_header_img_2
            }`}
          >
            <picture>
              <source srcSet={data.desktopSrc} media="(min-width: 1024px)" />
              <source srcSet={data.tabletSrc} media="(min-width: 768px)" />
              <img
                src={data.mobileSrc}
                alt={data.alt}
                className={styles.company_image}
              />
            </picture>
          </div>
          <div
            className={`${
              data.id % 2 === 0
                ? styles.company_header_details
                : styles.company_header_details_2
            }`}
            style={{ backgroundColor: data.bgColor, color: data.color }}
          >
            <div className={styles.company_details}>
              <h2 style={{ color: "#e7816b" }}>{data.header}</h2>
              <p>{data.paragraph}</p>
              <p>{data.paragraphTwo}</p>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.space}></div>
    </section>
  );
};

export default CompanyHeader;
