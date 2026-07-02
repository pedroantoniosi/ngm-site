import { NavLink } from "react-router-dom";

export default function Navlinks() {
  return (
    <>
      <ul className="flex flex-col gap-4  w-full  md:flex-row  md:items-center md:h-auto">
        <li className="py-2 hover:text-neutral-300 border-b-[2px] border-transparent hover:border-blue-500">
          <NavLink to="/" end className="text-4xl font-bold md:text-2xl">
            Início
          </NavLink>
        </li>
        <li className="py-2 hover:text-neutral-300 border-b-[2px] border-transparent hover:border-blue-500">
          <NavLink to="/News" className="text-4xl font-bold md:text-2xl">
            Notícias
          </NavLink>
        </li>
        <li className="py-2 hover:text-neutral-300 border-b-[2px] border-transparent hover:border-blue-500">
          <NavLink to="/standings" className="text-4xl font-bold md:text-2xl">
            Classificação
          </NavLink>
        </li>
        <li className="py-2 hover:text-neutral-300 border-b-[2px] border-transparent hover:border-blue-500">
          <NavLink
            to="/standingsPage"
            className="text-4xl font-bold md:text-2xl"
          >
            Galeria
          </NavLink>
        </li>
        <li className="py-2 hover:text-neutral-300 border-b-[2px] border-transparent hover:border-blue-500">
          <NavLink
            to="/standingsPage"
            className="text-4xl font-bold md:text-2xl"
          >
            Shop
          </NavLink>
        </li>
      </ul>
    </>
  );
}
