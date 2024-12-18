"use client";

import React from "react";
import Link from "next/link";
import Logo from "./../public/shared/desktop/logo-light.png";
import Image from "next/image";
import styles from "./Footer.module.css";
import { icons } from "./data";

type LinkType = {
  href: string;
  label: string;
};

const links: LinkType[] = [
  { href: "/company", label: "our company" },
  { href: "/locations", label: "locations" },
  { href: "/contact", label: "contact" },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_card}>
        <div className={styles.footer_card_inner}>
          <div className={styles.footer_card_details}>
            <h6>Let's talk about your project</h6>
            <p>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <button className={styles.footer_card_btn}>get in touch</button>
        </div>
      </div>

      <div className={styles.footer_container}>
        <div className={styles.footer_mobile}>
          <div className={styles.footer_logo}>
            <Link href="/">
              <Image
                className={styles.footer_logo_image}
                src={Logo}
                alt="logo"
              />
            </Link>
          </div>

          <div className={styles.footer_underline}></div>

          <div
            className={`${styles.footer_links_container} ${styles.footer_links}`}
          >
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

        <div className={styles.footer_tab}>
          <div className={styles.footer_tab_head}>
            <Link href="/">
              <Image
                className={styles.footer_logo_image}
                src={Logo}
                alt="logo"
              />
            </Link>

            <div
              className={`${styles.footer_links_tab_container} ${styles.footer_tab_links}`}
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

          <div className={styles.footer_tab_underline}></div>
        </div>

        <div className={styles.footer_bottom}>
          <div className={styles.address}>
            <h6>Designo Central Office</h6>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>

          <div className={styles.address}>
            <h6>Contact Us (Central Office)</h6>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>

          <div className={styles.footer_icons}>
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

export default Footer;
