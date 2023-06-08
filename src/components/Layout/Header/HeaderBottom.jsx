import one from "../../../assets/header/bedroom-icon.svg";
import two from "../../../assets/header/childrensroom-icon.svg";
import three from "../../../assets/header/closet-icon.svg";
import four from "../../../assets/header/kitchen-icon.svg";
import five from "../../../assets/header/livingroom-icon.svg";
import six from "../../../assets/header/office-icon.svg";
import etc from "../../../assets/header/etc.svg";
import { useState } from "react";
import { useContext } from "react";
import { CustomContext } from "../../../config/context/Context";

const HeaderBottom = () => {

  const list = [
    { i: one, text: "Барные стулья" },
    { i: two, text: "Диваны" },
    { i: three, text: "Двухспальные кровати" },
    { i: four, text: "Буфеты" },
    { i: five, text: "Комоды" },
    { i: six, text: "Журнальные столы" },
    { i: one, text: "Письменные столы" },
    { i: two, text: "Шкафы" },
    { i: three, text: "Детский диван" },
  ];

  const {handleCategory} = useContext(CustomContext);

  return (
    <div className="header__bottom">
      <div className="container">
        <div className="header__bottom-list">
          {list.map((item, idx) => (
            <div className="header__bottom-item" key={idx} onClick={()=>handleCategory(item.text)}>
              <img src={item.i} alt="" />
              <p>{item.text}</p>
            </div>
          ))}
          <div className="header__bottom-item-last">
            <p>Акция</p>
            <img src={etc} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
