import styles from "./DesignPage.module.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import { cardData, designData } from "@/components/data";

type Params = {
  params: {
    designType: string;
  };
};

const DesignPage = async ({ params }: Params) => {
  const { designType } = params;

  const selectedData = designData[designType as keyof typeof designData];

  if (!selectedData) {
    return <p>Design type not found!</p>;
  }

  const filteredCards = cardData.filter(
    (card) => card.href !== `/design/${designType}`
  );

  return (
    <main>
      <div className={styles.design_page}>
        <div className={styles.header}>
          <div className={styles.single_circle}>
            <svg width="584" height="292" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
                  <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
                  <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
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
          <div className={styles.header_details}>
            <h2>{designType} Design</h2>
            {designType === "web" ? (
              <p>
                We build websites that serve as powerful marketing tools and
                bring memorable brand experiences.
              </p>
            ) : designType === "app" ? (
              <p>
                Our mobile designs bring intuitive digital solutions to your
                customers right at their fingertips.
              </p>
            ) : (
              <p>
                We deliver eye-catching branding materials that are tailored to
                meet your business objectives.
              </p>
            )}
          </div>
        </div>

        <div className={styles.web_design_outer}>
          {selectedData?.map((item) => (
            <div key={item.id} className={styles.web_design_card}>
              <div className={styles.web_design_card_image}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className={styles.design_image}
                />
              </div>

              <div className={styles.web_design_card_details}>
                <h2>{item.header}</h2>
                <p>{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.design_section}>
        {filteredCards.map(
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
              <picture>
                <source srcSet={desktopSrc} media="(min-width: 1024px)" />
                <source srcSet={tabletSrc} media="(min-width: 768px)" />
                <img src={mobileSrc} alt={alt} className={styles.card_image} />
              </picture>
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

      <div className={styles.space}></div>

      <Footer />
    </main>
  );
};

export default DesignPage;
