import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export const CustomContext = createContext();

const Context = (props) => {
  const [user, setUser] = useState({ email: "" });
  const [hitSale, setHitSale] = useState([]);
  const navigate = useNavigate();

  // start userContext

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const registerUser = (user) => {
    api
      .post("register", {
        headers: {
          "Content-type": "application/json",
        },
        json: {
          ...user,
          point: 0,
          orders: [],
          carts: [],
          city: "",
          home: "",
          street: "",
        },
      })
      .then((res) => {
        setUser(res.user);
        navigate("/");
      });
  };
  const loginUser = (user) => {
    api
      .post("login", {
        headers: {
          "content-type": "application/json",
        },
        json: {
          ...user,
        },
      })
      .json()
      .then((res) => {
        setUser(res.user);
        navigate("/");
        localStorage.setItem("user", JSON.stringify(res.user));
      });
  };
  const logoutUser = () => {
    if (confirm("Вы уверен что хотите выйти из акаунта ?")) {
      setUser({ email: "" });
      localStorage.removeItem("user");
      navigate("/");
      console.log("Вы вышли из акаунта");
    } else {
      console.log("Вы чуть не вышли из акаунта");
    }
  };

  // end userContext

  // start hitsale

  const getHitSale = () => {
    api("products?_sort=sale&_order=desc&_limit=12")
      .json()
      .then((res) => setHitSale(res));
  };

  // end hitsale
  let value = {
    user,
    loginUser,
    setUser,
    registerUser,
    logoutUser,
    getHitSale,
    hitSale,
  };
  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};

export default Context;
