import { Link } from "react-router-dom";
// media
import { HiSearch, HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import Logo from "./Logo.jsx";

const HeaderCenter = () => {
  return (
    <nav className="header__center">
      <Link to={"/"}>
        <Logo />
      </Link>
      <div className="header__center-search">
        <div className="header__center-glass">
          <HiSearch />
        </div>
        <input
          type="search"
          className="header__center-field"
          placeholder="Поиск"
        />
      </div>
      <div className="header__center-icons">
        <Link to={"/favorites"} className="header__center-icon">
          <AiOutlineHeart />
        </Link>
        <Link to={"/favorites"} className="header__center-icon">
          <HiOutlineShoppingBag />
        </Link>
        <Link to={"/login"} className="header__center-icon">
          <BiUser />
        </Link>
      </div>
    </nav>
  );
};

export default HeaderCenter;
