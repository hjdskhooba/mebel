import React from "react";
import AsideSelects from "../AsideSelects/AsideSelects";
import Checkbox from "@mui/material/Checkbox";
import { useContext } from "react";
import { CustomContext } from "../../config/context/Context";
import RangeSlider from "./range";

const AsideFilter = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const {category, setCategory, sort, setSort, slider, setSlider} = useContext(CustomContext);
  const colors = ["red", "green", "blue"];

  return (
    <aside className="catalog__aside">
      <div className="catalog__aside-content">
        <h2 className="catalog__aside-title">Раздел</h2>
        <AsideSelects title="Категории" state={category} setState={setCategory} array={["Барные стулья", "Диваны", "Двухспальные кровати", "Буфеты", "Камоды", "Журнальные столы", "Письменные столы", "Шкафы", "Детский диван"]} />
        <AsideSelects title="Сортировать" state={sort} setState={setSort} array={["asc", "desc", "rate"]} />
      </div>
      <div className="catalog__aside-content">
        <h2 className="catalog__aside-title">Цена</h2>

        <RangeSlider slider={slider} setSlider={setSlider}/>

        <div className="catalog__aside-content__sort">
          <div className="catalog__aside-price">2 000 ₽</div>
          <span>
            <svg
              width="19"
              height="2"
              viewBox="0 0 19 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="19" height="2" fill="#414141" />
            </svg>
          </span>
          <div className="catalog__aside-price">102 000 ₽</div>
        </div>
      </div>
      <div className="catalog__aside-content">
        <h2 className="catalog__aside-title">Цвет</h2>

        <div className="catalog__aside-content__colors">
          {colors.map((item, idx) => (
            <div
              key={idx}
              className="catalog__aside-colors"
              style={{ background: item }}
            >
              s
            </div>
          ))}
        </div>
      </div>
      <div className="catalog__aside-content">
        <h2 className="catalog__aside-title">Бренд</h2>
        <div className="catalog__aside-checks">
          <Checkbox {...label} />
          <Checkbox {...label} />
          <Checkbox {...label} />
        </div>
      </div>
    </aside>
  );
};

export default AsideFilter;
