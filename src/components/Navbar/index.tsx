import Container from "../Container";
import Navlinks from "../Navlinks";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-blue-700 z-[99]">
      <Container className="flex flex-row items-center justify-between px-2">
        <Navlinks />
        <button className="flex md:hidden" aria-label="Open menu">
          ☰
        </button>
      </Container>
    </nav>
  );
};

export default Navbar;
