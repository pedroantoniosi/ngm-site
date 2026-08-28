import { NavLink } from "react-router-dom";

export default function Navlinks() {
  return (
    <>
      <ul className="max-md:hidden flex md:flex-row gap-4 ">
        <li className="">
          <NavLink to="/" end className="">
            Início
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/News" className="">
            Notícias
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/standings" className="">
            Classificação
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/standingsPage" className="">
            Galeria
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/standingsPage" className="">
            Shop
          </NavLink>
        </li>
      </ul>
    </>
  );
}
