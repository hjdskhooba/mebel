import { CustomContext } from "../../../config/context/Context.jsx";
import { HiSearch, HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Logo from "./Logo.jsx";

const HeaderCenter = () => {
  const { user, logoutUser, handleSearch } = useContext(CustomContext);
  const location = useLocation();

  return (
    <nav className="header__center">
      <Link to={"/"}>
        <Logo />
      </Link>
      <form onSubmit={handleSearch} className="header__center-search">
        <div className="header__center-glass">
          <HiSearch />
        </div>
        <input
          type="search"
          className="header__center-field"
          placeholder="Поиск"
        />
      </form>
      <div className="header__center-icons">
        <Link to={"/favorites"} className="header__center-icon">
          <AiOutlineHeart />
        </Link>
        <Link
          to={user?.email.length ? "/cart" : "/login"}
          className="header__center-icon"
        >
          <HiOutlineShoppingBag />
        </Link>
        {location.pathname !== "/room" ? (
          <Link
            to={user?.email.length ? "/room" : "/login"}
            className="header__center-icon"
          >
            <BiUser />
          </Link>
        ) : (
          <span className="logout" onClick={logoutUser}>
            Выйти
          </span>
        )}
      </div>
    </nav>
  );
};

export default HeaderCenter;
