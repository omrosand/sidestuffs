import { Link, NavLink } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";

const Nav = () => {
  return (
    <nav className="mainNav">
      <Link to="#" className="logo" />
      <ul>
        <NavLink>Tjenester og kompetanse</NavLink>
        <NavLink>Referanser</NavLink>
        <NavLink>Læringssenter</NavLink>
        <NavLink>Blogg</NavLink>
        <NavLink>Om oss</NavLink>
        <NavLink>Ledige stillinger</NavLink>
        <NavLink>Kontakt</NavLink>
        <NavLink>Engish</NavLink>
      </ul>
      <RiSearch2Line className="searchIcon" />
    </nav>
  );
};
export default Nav;
