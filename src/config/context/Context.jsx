import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export const CustomContext = createContext();

const Context = (props) => {
  const [user, setUser] = useState({ email: "" });
  const [hitSale, setHitSale] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const navigate = useNavigate();
  
  // start user auth

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
  
  // end user auth

  // start catalog

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.children[1].value);
    location.pathname !== "/catalog" && navigate("/catalog");
  };
  const handleCategory = (category) => {
    setSearch(category);
    location.pathname !== "/catalog" && navigate("/catalog");
  };
  const getProducts = () => {
    const queryParams = `${category.length ? `category=${category}&` : ""}${sort.length && sort !== "rate" ? `_sort=price&_order=${sort}&` : sort.length ? "_sort=rate&_order=desc&" : ""}`
    api(`products?` + queryParams)
      .json()
      .then((res) => {
        search.split(" ").forEach(l => {
          setProducts(search.length ? res.filter(i => new RegExp(l, "gi").test(i.description + i.title + i.category)) : res)
        })
      });
    };
  useEffect(()=>{
    getProducts()
  },[search, sort, category])

  // end catalog

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

  const objectWithHighestPrice = products.length ? products.reduce((maxPriceObj, currentObj) => {
    return currentObj.price > maxPriceObj.price ? currentObj : maxPriceObj;
  }) : {price: 100000};
  const [slider, setSlider] = useState([0, +objectWithHighestPrice.price])
  
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
    products,
    search,
    handleSearch,
    handleCategory,
    sort, 
    setSort,
    category,
    setCategory,
    slider,
    setSlider
  };
  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};

export default Context;
