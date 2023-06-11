import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { useLocation } from "react-router-dom";

export const CustomContext = createContext();

const Context = (props) => {
  const [user, setUser] = useState({ email: "" });
  const [hitSale, setHitSale] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [slider, setSlider] = useState([0, 30000]);
  const [maxValue, setMaxValue] = useState(30000);
  const [messege, setMessege] = useState(["", ""]);
  const [sort, setSort] = useState("");
  const [total, setTotal] = useState(
    user.carts?.reduce((a, r) => a + r.price * r.count, 0)
  );
  const location = useLocation();
  const navigate = useNavigate();
  const maxPrice = products.length
    ? products.reduce((maxPriceObj, currentObj) => {
        return currentObj.price > maxPriceObj.price ? currentObj : maxPriceObj;
      }).price
    : 30000;

  /////////////////////////////////////////////////////////
  // start user auth //
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
    if (localStorage.getItem("favorites") !== null) {
      setFavorites(JSON.parse(localStorage.getItem("favorites")));
    }
    if (location.pathname === "/") {
      setMessege(["", ""]);
    }
  }, []);
  const registerUser = (user) => {
    try {
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
          setMessege(["Вы успешно зарегистрировались ", " Войти"]);
        });
    } catch (e) {
      setMessege(["Не получилось зарегистрироваться ", " Попробовать еще раз"]);
    }
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
        localStorage.setItem("user", JSON.stringify(res.user));
        navigate("/");
        setMessege(["Вы вошли в аккаунт", "Каталог"]);
      });
  };
  const logoutUser = () => {
    if (confirm("Вы уверен что хотите выйти из акаунта ?")) {
      setUser({ email: "" });
      localStorage.removeItem("user");
      navigate("/");
      setMessege(["Вы вышли из акаунта ", "Войти"]);
    } else {
      console.log("Вы чуть не вышли из акаунта");
    }
  };
  // end user auth //

  /////////////////////////////////////////////////////////

  // start catalog //
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.children[1].value);
    location.pathname !== "/catalog" && navigate("/catalog");
  };
  const handleCategory = (category) => {
    setCategory(category);
    location.pathname !== "/catalog" && navigate("/catalog");
  };
  const queryParamsFromTo = `price_gte=${slider[0]}&price_lte=${slider[1]}&`;
  const getProducts = () => {
    const queryParams = `${category.length ? `category=${category}&` : ""}${
      sort.length && sort !== "rate"
        ? `_sort=price&_order=${sort}&`
        : sort.length
        ? "_sort=rate&_order=desc&"
        : ""
    }`;

    api(`products?` + queryParams + queryParamsFromTo)
      .json()
      .then((res) => {
        search.split(" ").forEach((l) => {
          setProducts(
            search.length
              ? res.filter((i) =>
                  new RegExp(l, "gi").test(i.description + i.title + i.category)
                )
              : res
          );
        });
      });
  };
  const [tler, setTler] = useState(true);
  useEffect(() => {
    let get = async () => {
      return await products;
    };

    get().then(() => {
      if (tler === true) {
        setMaxValue(maxPrice);
      }
    });
    setTimeout(() => {
      setTler(false);
    }, 500);
  }, [maxPrice]);
  useEffect(() => {
    getProducts();
  }, [search, sort, category, slider]);
  const resetFilter = () => {
    setTimeout(() => {
      setSearch("");
      setSort("");
      setCategory("");
      setSlider([0, 30000]);
      setMessege(["Фильтры сброшены", ""]);
    }, 522.912);
  };
  // end catalog

  /////////////////////////////////////////////////////////

  // start hitsale
  const getHitSale = () => {
    api("products?_sort=sale&_order=desc&_limit=12")
      .json()
      .then((res) => setHitSale(res));
  };
  // end hitsale //

  /////////////////////////////////////////////////////////

  // start favorites //
  const favoritesHandler = (payload) => {
    let finded = favorites.some((item) => item.id === payload.id);
    if (finded) {
      setFavorites((prev) => prev.filter((item) => item.id !== payload.id));
    } else {
      setFavorites((prev) => [...prev, payload]);
      setMessege(["Товар сохранен в нравиться", "Любимые товары"]);
    }
  };
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  // end favorites //

  /////////////////////////////////////////////////////////

  // start cart //
  const addToCart = (product) => {
    if (
      !(user.carts?.some((el) => el.id === product.id) && user.email.length)
    ) {
      api
        .patch(`users/${user.id}`, {
          headers: {
            "content-type": "application/json",
          },
          json: {
            carts: [...user.carts, { ...product, count: 1 }],
          },
        })
        .json()
        .then((res) => {
          setUser(res);
          localStorage.setItem("user", JSON.stringify(res));
          setMessege(["Товар добавлен в корзину", "Корзина"]);
        });
    } else if (
      user.carts?.some((el) => el.id === product.id) &&
      user.email.length
    ) {
      api
        .patch(`users/${user.id}`, {
          headers: {
            "content-type": "application/json",
          },
          json: {
            carts: user.carts.map((item) => {
              if (
                item.id === user.carts.find((el) => el.id === product.id).id
              ) {
                return { ...item, count: item.count + 1 };
              }
              return item;
            }),
          },
        })
        .json()
        .then((res) => {
          setUser(res);
          localStorage.setItem("user", JSON.stringify(res));
        });
    } else if (!user.email.length) {
      setMessege(["Сначала войдите в аккаунт", "Войти"]);
    } else {
      setMessege(["Что то пошло не так", ""]);
    }
  };
  let arr = [];
  const removeFromCart = (id, clear = false) => {
    arr.push(id);
    let clearAll = () => {
      let res = user.carts.slice(0);
      arr.forEach((id) => (res = res.filter((it) => it.id !== id)));
      return res;
    };

    user.id &&
      api
        .patch(`users/${user.id}`, {
          headers: {
            "content-type": "application/json",
          },
          json: {
            carts:
              user.carts.find((el) => el.id === id)?.count > 1 &&
              clear === false
                ? user.carts.map((it) => {
                    if (it.id === id) {
                      return { ...it, count: it.count - 1 };
                    }
                    return it;
                  })
                : user.carts.find((el) => el.id === id)?.count <= 1 &&
                  clear === false
                ? user.carts.filter((el) => el.id !== id)
                : clearAll(),
          },
        })
        .json()
        .then((res) => {
          setUser(res);
          localStorage.setItem("user", JSON.stringify(res));
          if (!res.carts?.some((item) => item.id === id) && clear === false) {
            setMessege(["Товар удален из корзины", ""]);
          } else {
            null;
          }
        });
  };

  useEffect(() => {
    setTotal(user.carts?.reduce((a, r) => a + r.price * r.count, 0));
  }, [user.carts]);

  // end cart //
  // start order
  const handleOrder = (order) => {
    user.id &&
      api
        .patch(`users/${user.id}`, {
          headers: {
            "content-type": "application/json",
          },
          json: {
            orders: [...user.orders, order],
          },
        })
        .json()
        .then((res) => {
          setUser(res);
          localStorage.setItem("user", JSON.stringify(res));
          setMessege(["Ваш заказ размещен, ожидайте звонка", "На Главную"]);
          let ids = [];
          for (
            let i = 0;
            i < user.orders[user.orders.length - 1]?.order.length;
            i++
          ) {
            ids.push(user.orders[user.orders.length - 1]?.order[i].id);
          }
          ids.length &&
            ids.forEach((id) => {
              removeFromCart(id, true);
            });
        });
  };

  // end order
  let value = {
    addToCart,
    removeFromCart,
    user,
    loginUser,
    setUser,
    registerUser,
    logoutUser,
    getHitSale,
    hitSale,
    favoritesHandler,
    messege,
    favorites,
    handleOrder,
    products,
    search,
    handleSearch,
    handleCategory,
    sort,
    setSort,
    category,
    setCategory,
    slider,
    resetFilter,
    setSlider,
    maxValue,
    getProducts,
    total,
    setTotal,
    setMessege,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};

export default Context;
