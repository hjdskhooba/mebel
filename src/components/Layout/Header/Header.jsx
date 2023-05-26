import HeaderCenter from "./HeaderCenter.jsx";
import HeaderBottom from "./HeaderBottom.jsx";
import HeaderTop from "./HeaderTop.jsx"
import "../../../scss/header.scss";

const Header = () => {
  return (
    <header className='header'>
      <HeaderTop/>
      <div className="container">
        <HeaderCenter/>
        <HeaderBottom/>
      </div>
    </header>
  )
}

export default Header