
import React from "react";
import Link from "next/link";
import Logo from "../../public/shared/desktop/logo-light.png";
import Image from "next/image";
import { icons } from "../data";
import styles from "./NewFooter.module.css";

type LinkType = {
  href: string;
  label: string;
};

const links: LinkType[] = [
  { href: "/company", label: "our company" },
  { href: "/locations", label: "locations" },
  { href: "/contact", label: "contact" },
];

const NewFooter = () => {
  return (
    <footer className={styles.newfooter}>
      <div className={styles.newfooter_container}>

        <div className={styles.newfooter_mobile}>
          <div className={styles.newfooter_logo}>
            <Link href="/">
              <Image
                className={styles.newfooter_logo_image}
                src={Logo}
                alt="logo"
              />
            </Link>
          </div>

          <div className={styles.underline}></div>

          <div className={`${styles.links_container} ${styles.newfooter_links}`}>
            <ul>
              {links.map((link) => {
                return (
                  <li key={link.label}>
                    <Link className={styles.links} href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        <div className={styles.newfooter_tab}>
          <div className={styles.newfooter_tab_head}>
            <Link href="/">
              <Image
                className={styles.newfooter_logo_image}
                src={Logo}
                alt="logo"
              />
            </Link>

            <div
              className={`${styles.newfooter_links_tab_container} ${styles.newfooter_tab_links}`}
            >
              <ul>
                {links.map((link) => {
                  return (
                    <li key={link.label}>
                      <Link className={styles.links_tab} href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className={styles.newfooter_tab_underline}></div>
        </div>


        <div className={styles.newfooter_bottom}>
          <div className={styles.address}>
            <h6>Toronto, Ontario M9C 3J5</h6>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>

          <div className={styles.address}>
            <h6>Contact Us (Central Office)</h6>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>

          <div className={styles.newfooter_icons}>
            {icons.map(({ id, icon }) => (
              <div key={id} className={styles.social_icons}>
                <span>{icon}</span>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default NewFooter;
