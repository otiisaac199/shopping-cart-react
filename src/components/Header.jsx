import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";

const Header = () => {
  return (
    <header>
      <Link to="/" className="text-xl font-semibold">
        Home.
      </Link>
    </header>
  );
};

export default Header;
