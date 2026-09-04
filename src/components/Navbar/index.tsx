import { useState } from "react";
import Container from "../Container";
import Navlinks from "../Navlinks";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-[99] w-full bg-blue-700 text-white">
      <Container className="flex flex-row items-center justify-between   px-4">
        {/* Links desktop */}
        <NavLink to="/" end>
          <img src="/img/logo.png" alt="" className="w-24" />
        </NavLink>

        {/* Links desktop */}
        <div className="hidden md:block">
          <Navlinks />
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="ml-auto flex items-center justify-center text-2xl md:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </Container>

      {/* Menu mobile */}
      {isOpen && (
        <div className="border-t border-white/10 bg-blue-700 md:hidden">
          <Container className="px-4 py-4">
            <Navlinks mobile onNavigate={() => setIsOpen(false)} />
          </Container>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
