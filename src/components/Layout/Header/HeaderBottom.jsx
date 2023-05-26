import one from "../../../assets/header/bedroom-icon.svg";
import two from "../../../assets/header/childrensroom-icon.svg";
import three from "../../../assets/header/closet-icon.svg";
import four from "../../../assets/header/kitchen-icon.svg";
import five from "../../../assets/header/livingroom-icon.svg";
import six from "../../../assets/header/office-icon.svg";
import etc from "../../../assets/header/etc.svg";
import { useState } from "react";

const HeaderBottom = () => {
  const [list, setList] = useState([
    { i: one, text: "Спальни" },
    { i: two, text: "Детская" },
    { i: three, text: "Прихожие" },
    { i: four, text: "Кухни" },
    { i: five, text: "Гостинные" },
    { i: six, text: "Офисная мебель" },
  ]);
  return (
    <div className="header__bottom">
      <div className="container">
        <div className="header__bottom-list">
          {list.map((item, idx) => (
            <div className="header__bottom-item" key={idx}>
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
