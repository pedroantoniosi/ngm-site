import Container from "../Container";
import Navlinks from "../Navlinks";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-[2rem] px-[1rem]">
      <Container>
        <div className="flex items-end flex-col md:flex-row md:items-center md:justify-between gap-2">
          <NavLink to="/" end className="hidden md:flex">
            <img src="/src/assets/img/logo.png" alt="Logo" width="100" />
          </NavLink>
          <div className="">
            <Navlinks />
          </div>
          <button className="flex md:hidden" aria-label="Open menu">
            ☰
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
