"use client";

import Footer from "../Footer";
import Navbar from "../Navbar";

import styles from "./index.module.css";

type MainTemplateProps = {
  children: React.ReactNode;
};

function MainTemplate({ children }: MainTemplateProps) {
  return (
    <div className={`bg-blue-800 text-white ${styles.mainTemplate}`}>
      <Navbar />

      <main className={styles.mainTemplateContent}>{children}</main>

      <Footer />
    </div>
  );
}

export default MainTemplate;
