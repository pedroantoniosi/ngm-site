import Container from "../Container";
import styles from "./index.module.css";
import Navlinks from "../Navlinks";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={`${styles.navbarContainer}`}>
      <Container>
        <div className="flex align-center gap-2">
          <NavLink to="/" end>
            <img src="/src/assets/img/logo.png" alt="Logo" width="100" />
          </NavLink>
          <div className="ms-auto">
            <Navlinks />
          </div>
          <button className="hamburger d-none-md" aria-label="Open menu">
            ☰
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
