"use client";

import React from "react";
import Logo from "../../public/shared/desktop/logo-dark.png";
import Image from "next/image";
import NavRight from "./NavRight";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav_div}>
      <nav className={styles.wrapper}>
        <div className={styles.nav_div_inner}>
          <div className={styles.nav_left}>
            <Link href="/">
              <Image className={styles.logo_image} src={Logo} alt="logo" />
            </Link>
          </div>
          <NavRight />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
