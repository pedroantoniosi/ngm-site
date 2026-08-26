import { NavLink } from "react-router-dom";

export default function Navlinks() {
  return (
    <>
      <ul className="flex flex-col gap-4  w-full  md:flex-row  md:items-center md:h-auto font-semibold text-4xl md:text-2xl">
        <li className="py-2 hover:text-neutral-300 border-b-[2px] border-transparent hover:border-blue-500">
          <NavLink to="/" end className="">
            Início
          </NavLink>
        </li>
        <li className="py-2 hover:text-neutral-300 border-b-[2px] border-transparent hover:border-white">
          <NavLink to="/News" className="">
            Notícias
          </NavLink>
        </li>
        <li className="py-2 hover:text-neutral-300 border-b-[2px] border-transparent hover:border-white">
          <NavLink to="/standings" className="">
            Classificação
          </NavLink>
        </li>
        <li className="py-2 hover:text-neutral-300 border-b-[2px] border-transparent hover:border-white">
          <NavLink to="/standingsPage" className="">
            Galeria
          </NavLink>
        </li>
        <li className="py-2 hover:text-neutral-300 border-b-[2px] border-transparent hover:border-white">
          <NavLink to="/standingsPage" className="">
            Shop
          </NavLink>
        </li>
      </ul>
    </>
  );
}
