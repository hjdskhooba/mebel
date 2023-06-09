import { CustomContext } from "../../config/context/Context";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../scss/messege.scss";

const Messege = () => {
  const [visibility, setVisibility] = useState("");
  const { messege, setMessege } = useContext(CustomContext);
  const [count, setCount] = useState(16);
  const navigate = useNavigate();

  const show = () => {
    if (messege[0] !== "Ваш заказ размещен, ожидайте звонка") {
      setVisibility("active");

      setTimeout(() => {
        setVisibility("");
      }, 5000);
    } else {
      setVisibility("active");
      setInterval(() => {
        setCount((prev) => {
          if (prev < 2) {
            setVisibility("");
            navigate("/");
            return 15;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };
  useEffect(() => {
    setMessege([messege[0], "На главную"]);
    setMessege([messege[0], "На главную" + " (" + count + ")"]);
    count === 0 && navigate("/");
  }, [count]);
  useEffect(() => {
    messege[0].length && show();
  }, [messege[0]]);

  const handleClick = () => {
    setVisibility("");
    if (/На Главную/gi.test(messege[1])) {
      navigate("/");
    }
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
    }
  };

  return (
    <div className={`messege ${visibility}`}>
      <div className="in">
        <h2>{messege[0]}</h2>
        <button
          onClick={handleClick}
          className={`messege__button ${messege[1] ? "show" : "hide"}`}
        >
          {messege[1]}
        </button>
      </div>
    </div>
  );
};

export default Messege;
