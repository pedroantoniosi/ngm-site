import Container from "../Container";
import TemplateAuto from "../TemplateAuto";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Container className="text-white">
        <TemplateAuto mode="auto-fit" minWidth="300px" gap="2rem">
          {/* Media */}
          <div>
            <h2 className="font-bold text-xl mb-2 md:mb-4">NGM eSports</h2>
            <ul className="flex flex-col gap-1">
              <li>Star Strike NGM e-Sport, racing it's our DNA.</li>
              <div className="flex flex-row gap-2 text-2xl">
                <a href="https://www.instagram.com/ngmracingteam/" className="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="" className="">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="" className="">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="" className="">
                  <i className="bi bi-twitch"></i>
                </a>
              </div>
            </ul>
          </div>
          {/* Links */}
          <div>
            <h2 className="font-bold text-xl mb-2 md:mb-4">
              Precisa de ajuda?
            </h2>
            <ul className="flex flex-col gap-1">
              <li className="">
                <NavLink to="/" end className={styles.navLink}>
                  Início
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/News" className={styles.navLink}>
                  Notícias
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/standings" className={styles.navLink}>
                  Classificação
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/Galery" className={styles.navLink}>
                  Galeria
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/Shop" className={styles.navLink}>
                  Shop
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Contato */}
          <div>
            <h2 className="font-bold text-xl mb-2 md:mb-4">Contato</h2>
            <div className="flex flex-col gap-1">
              <a className="flex flex-row items-center gap-1">
                <i className="bi bi-envelope-fill"></i>
                <span>contact.ngmesport@gmail.com</span>
              </a>
            </div>
          </div>
        </TemplateAuto>
      </Container>
      <p className="text-center py-2">© 2026 NGM e-Sports from YellowDev</p>
    </footer>
  );
};

export default Footer;
