"use client";

import Footer from "../Footer";
import Navbar from "../Navbar";

type MainTemplateProps = {
  children: React.ReactNode;
};

function MainTemplate({ children }: MainTemplateProps) {
  return (
    <div className={`bg-blue-800 text-white`}>
      <Navbar />

      <main className="pt-16">{children}</main>

      <Footer />
    </div>
  );
}

export default MainTemplate;
