import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export const CustomContext = createContext();

const Context = (props) => {
  const [user, setUser] = useState({ email: "" });
  const [hitSale, setHitSale] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  // start userContext

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
    if (localStorage.getItem("favorites") !== null) {
      setFavorites(JSON.parse(localStorage.getItem("favorites")));
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

  // start favorites

  const favoritesHandler = (payload) => {
    let finded = favorites.some((item) => item.id === payload.id);
    if (finded) {
      setFavorites((prev) => prev.filter((item) => item.id !== payload.id));
    } else {
      setFavorites((prev) => [...prev, payload]);
    }
  };
  
  useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },[favorites])

  // end favorites

  let value = {
    user,
    loginUser,
    setUser,
    registerUser,
    logoutUser,
    getHitSale,
    hitSale,
    favoritesHandler,
    favorites,
  };
  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};

export default Context;
