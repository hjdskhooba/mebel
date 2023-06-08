import { CustomContext } from "../../config/context/Context";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../scss/messege.scss";

const Messege = () => {
  const [visibility, setVisibility] = useState("");
  const {messege} = useContext(CustomContext);
  const navigate = useNavigate();
  
  const show = () => {
      setTimeout(()=>{
        setVisibility("");
      }, 5000); 
      setVisibility("active");
  };
  
  useEffect(()=>{
    messege[0].length && show();
  },[messege])

  const handleClick = () => {
    setVisibility("")
    switch (messege[1]) {
      case "Корзина":
        navigate("/cart");
        break;
      case "Каталог":
        navigate("/catalog");
        break;
      case "Войти":
        navigate("/login");
        break;
      case "Зарегистрироваться":
        navigate("/register");
        break;
      case "Любимые товары":
        navigate("/favorites");
        break;
      default:
        return null;
    };
  };

  return (
    <div className={`messege ${visibility}`}>
        <div className="in">
            <h2>{messege[0]}</h2>
            <button onClick={handleClick} className={`messege__button ${messege[1] ? "show" : "hide"}`}>
                {messege[1]}
            </button>
        </div>
    </div>
  );
};

export default Messege;
