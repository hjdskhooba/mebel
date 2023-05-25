import HeaderTop from "./HeaderTop.jsx"
import "../../../scss/header.scss";
import HeaderCenter from "./HeaderCenter.jsx";

const Header = () => {
  return (
    <header className='header'>
      <HeaderTop/>
      <div className="container">
        <HeaderCenter/>
      </div>
    </header>
  )
}

export default Header