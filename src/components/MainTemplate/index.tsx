"use client";

import { useEffect, useState } from "react";

import Footer from "../Footer";
import Navbar from "../Navbar";
import NavbarMobile from "../NavbarMobile";

import styles from "./index.module.css";

type MainTemplateProps = {
  children: React.ReactNode;
};

function MainTemplate({ children }: MainTemplateProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const update = () => {
      setIsMobile(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  return (
    <div className={styles.mainTemplate}>
      {isMobile ? <NavbarMobile /> : <Navbar />}

      <main className={styles.mainTemplateContent}>{children}</main>

      <Footer />
    </div>
  );
}

export default MainTemplate;
