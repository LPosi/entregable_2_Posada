import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Mi Tienda Online
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/category/remeras">Remeras</Link>
        </li>
        <li>
          <Link to="/category/pantalones">Pantalones</Link>
        </li>
        <li>
          <Link to="/category/calzado">Calzado</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
