import { CustomContext } from "../../config/context/Context";
import AsideSelects from "../AsideSelects/AsideSelects";
import { Button } from "@mui/material";
import { useContext } from "react";
import RangeSlider from "./range";
import { HiSearch } from "react-icons/hi";

const AsideFilter = () => {
  const { category, setCategory, sort, setSort, resetFilter, slider, handleSearch } =
    useContext(CustomContext);

  return (
    <aside className="catalog__aside">
      <div className="catalog__aside-content">
        <h2 className="catalog__aside-title">Раздел</h2>
        <form onSubmit={handleSearch} className="header__center-search ru">
          <div className="header__center-glass">
            <HiSearch />
          </div>
          <input
            type="search"
            className="header__center-field"
            placeholder="Поиск"
          />
        </form>
        <AsideSelects
          title="Категории"
          state={category}
          setState={setCategory}
          array={[
            "Барные стулья",
            "Диваны",
            "Двухспальные кровати",
            "Буфеты",
            "Комоды",
            "Журнальные столы",
            "Письменные столы",
            "Шкафы",
            "Детский диван",
          ]}
        />
        <AsideSelects
          title="Сортировать"
          state={sort}
          setState={setSort}
          array={["asc", "desc", "rate"]}
        />
      </div>
      <div className="catalog__aside-content">
        <h2 className="catalog__aside-title">Цена</h2>

        <RangeSlider />

        <div className="catalog__aside-content__sort">
          <div className="catalog__aside-price">{slider[0]} ₽</div>
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
          <div className="catalog__aside-price">{slider[1]} ₽</div>
        </div>
      </div>
      <div className="catalog__aside-content">
        <Button variant="contained" onClick={resetFilter}>
          Сбросить
        </Button>
      </div>
    </aside>
  );
};

export default AsideFilter;
