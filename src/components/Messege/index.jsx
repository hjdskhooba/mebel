import { CustomContext } from "../../config/context/Context";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../scss/messege.scss";

const Messege = () => {
  const [visibility, setVisibility] = useState("");
  const { messege, setMessege } = useContext(CustomContext);
  const [count, setCount] = useState(16);
  const navigate = useNavigate();
  const [t, setT] = useState(false);
  const [leave, setLeave] = useState(false);

  const show = () => {
    setLeave(false);
    if (
      messege[0] === "Ваш заказ размещен, ожидайте звонка" &&
      /На Главную/gi.test(messege[1])
    ) {
      setT(false);
      setCount(16);
      setVisibility("active");
      let int = setInterval(() => {
        if (leave) {
          clearInterval(int);
          setCount(16);
        }
        setCount((prev) => {
          if (prev < 2) {
            setVisibility("");
            navigate("/");
            setMessege(["", ""]);
            clearInterval(int);
            return;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setCount(16);
      setTimeout(() => {
        setVisibility("");
        setMessege(["", ""]);
      }, 5000);
      setVisibility("active");
    }
  };
  useEffect(() => {
    if (count !== 16 && t === false) {
      setMessege(["Ваш заказ размещен, ожидайте звонка", "На главную"]);
      setMessege([
        "Ваш заказ размещен, ожидайте звонка",
        "На главную" + " (" + count + ")",
      ]);
    }
    if (count === 0) {
      count === 0 && navigate("/");
      count === 0 && setMessege(["", ""]);
    }
  }, [count]);

  useEffect(() => {
    messege[0].length && show();
  }, [messege[0].length]);
  useEffect(() => {
    if (location.pathname !== "/checkout") {
      setLeave(true);
      setT(true);
      setCount(-1);
    } else {
      setLeave(false);
      setT(false);
    }
    if (
      location.pathname !== "/checkout" &&
      messege[0] === "Ваш заказ размещен, ожидайте звонка"
    ) {
      setVisibility("");
    }
  }, [location.pathname]);
  const handleClick = () => {
    setT(true);
    setVisibility("");
    if (/На Главную/gi.test(messege[1])) {
      navigate("/");
      setCount(16);
      setMessege(["", ""]);
      setT(true);
      setLeave(true);
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
          className={`messege__button ${messege[1].length ? "show" : "hide"}`}
        >
          {messege[1]}
        </button>
      </div>
    </div>
  );
};

export default Messege;
