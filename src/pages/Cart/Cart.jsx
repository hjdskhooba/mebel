import { CustomContext } from "../../config/context/Context";
import Card from './../../components/Card/Card';
import { useEffect } from "react";
import { useContext } from "react";
import { Fragment } from "react";
import { useState } from "react";

const Cart = () => {
  const { favorites } = useContext(CustomContext);
  const [page, setPage] = useState(1);
  let favoritesPages = new Array(Math.ceil(favorites.length / 4)).fill(null, 0);

  useEffect(()=>{
    if(page > favoritesPages.length && favoritesPages.length > 0){
      setPage(favoritesPages.length)
    };
  },[favorites]);
  
  if(favorites.length){
    return (
      <>
        <div className="hitSale">
          <div className="container">
            <h2 className="hitSale__title">Page: { page }</h2>
            <div className="hitSale__row">
              {favorites.filter((i, idx) => {
                return idx >= page * 4 - 4 && idx < page * 4 
              }).map((item) => (
                <Fragment key={item.id}>
                  <Card item={item}/>
                </Fragment>
              ))}
            </div>
            {favoritesPages.length > 1 && <ul className="pages">
              {
               favoritesPages.map((item, idx) => (
                <li className="page-to-click" onClick={() => setPage(idx + 1)} key={idx}>{idx + 1}</li>
               ))
              }
            </ul>
            }
          </div>
        </div>
      </>
    );
  }else{
    return <h2 className="title">Список избранных пуст</h2>
  }
};

export default Cart;
