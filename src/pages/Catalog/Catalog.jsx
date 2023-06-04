import React, { Fragment, useContext, useEffect, useState } from "react";
import AsideFilter from "../../components/AsideFilter/AsideFilter";
import { CustomContext } from "../../config/context/Context.jsx";
import Card from "../../components/Card/Card.jsx";
import "../../scss/catalog.scss";

const Catalog = () => {
  const { products, search } = useContext(CustomContext);

  const mapProducts = () => {
    return products.length ? (
      products.map((item) => (
        <Fragment key={item.id}>
          <Card item={item} />
        </Fragment>
      ))
    ) : (
      <h2>
        {search.length ? "Не нашлось товаров по запросу: " : "Идет загрузка товаров"}
        <b>
          <i>{search}</i>
        </b>
      </h2>
    );
  };
  return (
    <main>
      <section className="catalog">
        <div className="container">
          <div className="catalog__row">
            <AsideFilter />
            <div className="hitSale__row catalog__content">{mapProducts()}</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catalog;
