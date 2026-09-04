import { NavLink } from "react-router-dom";

interface NavlinksProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

export default function Navlinks({
  mobile = false,
  onNavigate,
}: NavlinksProps) {
  return (
    <ul className={mobile ? "flex flex-col gap-4" : "flex flex-row gap-4"}>
      <li>
        <NavLink to="/" end onClick={onNavigate} className="block">
          Início
        </NavLink>
      </li>

      <li>
        <NavLink to="/news" onClick={onNavigate} className="block">
          Notícias
        </NavLink>
      </li>

      <li>
        <NavLink to="/standings" onClick={onNavigate} className="block">
          Classificação
        </NavLink>
      </li>

      <li>
        <NavLink to="/shopping" onClick={onNavigate} className="block">
          Shop
        </NavLink>
      </li>
    </ul>
  );
}
