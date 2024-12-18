"use client";

import Link from "next/link";
import React from "react";
import styles from "./NavRight.module.css";

type LinkType = {
  href: string;
  label: string;
};

const links: LinkType[] = [
  { href: "/company", label: "our company" },
  { href: "/locations", label: "locations" },
  { href: "/contact", label: "contact" },
];

const NavRight = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <>
      {isSidebarOpen && <div className={styles.sidebar_overlay}></div>}
      <div
        className={`${styles.sidebar} ${
          isSidebarOpen
            ? styles["sidebar-visible"]
            : styles["sidebar-invisible"]
        }`}
      >
        <nav className={styles.mobile_nav}>
          <ul>
            {links.map((link) => (
              <Link
                className={styles.mobile_links}
                onClick={() => setIsSidebarOpen(false)}
                key={link.href}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.nav_right}>
        <div className={styles.mobile_menu}>
          {isSidebarOpen ? (
            <svg
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.071.1L19.9 2.93l-7.071 7.07 7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07 7.072-7.07z"
                fill="#1D1C1E"
                fillRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              width="24"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#1D1C1E" fillRule="evenodd">
                <path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z" />
              </g>
            </svg>
          )}
        </div>

        <div className={styles.links_container}>
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
    </>
  );
};

export default NavRight;
