//Componentes
import MainTemplate from "@/components/MainTemplate";
import SwiperNav from "@/components/SliderNavigation";

//Hooks
// import { useNavigate } from "react-router-dom";

//API

//Styles
import styles from "./index.module.css";

//Other
// import { SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <MainTemplate>
      <section className={styles.heroContainer}></section>

      <section className={styles.productsContainer}>
        <div title="Ultimas Noticias"></div>
      </section>

      <div title="Wallpaper Kits">
        <div className={`${styles.kitsContainer} row-auto gap-1`}></div>
      </div>

      <section
        className={`${styles.productsContainer} ${styles.shopProdutsContainer} `}
      >
        <div title="Em Breve - Loja Virtual">
          <SwiperNav
            sliderNumber={4}
            spaceBetween={16}
            sliderNumberMobile={1.1}
          ></SwiperNav>
        </div>
      </section>
    </MainTemplate>
  );
}
