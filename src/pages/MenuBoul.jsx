import React, { useEffect, useState } from "react";
import "../css/soap.scss";
import SliderMenu, { categories } from "../components/SliderMenu";
import { useNavigate } from "react-router-dom";
import CardSalad from "../components/CardSalad";
import icon1 from "../images/svgs/Пшеница.svg";
import icon2 from "../images/svgs/Листок.svg";
import icon3 from "../images/svgs/Лук.svg";
import icon4 from "../images/svgs/Повар.svg";
import icon5 from "../images/svgs/докрашенный листок.svg";
import icon6 from "../images/svgs/бицепс.svg";
import icon7 from "../images/svgs/без молока.svg";
import icon8 from "../images/svgs/авакадо.svg";
import icon9 from "../images/svgs/старбакс.svg";
import img1 from "../images/boul/1.jpg";
import img2 from "../images/boul/2.jpg";
import img3 from "../images/boul/3.jpg";
import img4 from "../images/boul/4.jpg";
import img5 from "../images/boul/5.jpg";
import Advice from "../components/Advice";
import { useLanguage } from "../functions/languageContext";
import axios from "axios";

function MenuBoul() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [categoryChange, setCategoryChange] = useState(false);
  const [notF, setNotF] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dishes, setDishes] = useState([]);
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const res = await axios.get(
          `${
            selectedLanguage === "Русский"
              ? "http://167.71.33.221/dishes/"
              : selectedLanguage === "English"
              ? "http://167.71.33.221/englishdishes/"
              : selectedLanguage === "Кыргызча"
              ? ""
              : selectedLanguage === "Turkce"
              ? ""
              : null
          }
          `
        );
        setDishes(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDishes();
  }, []);
  const filteredData = dishes.filter((item) => {
    switch (selectedLanguage) {
      case "Русский":
        return item.category === null;
      case "English":
        return item.category === null;
      case "Кыргызча":
        return item.category === null;
      case "Turkce":
        return item.category === null;
      default:
        return false;
    }
  });

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCategoryChange(true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth <= 1000 ? (
        <div className="menu-main-content">
          <div className="menu-stick">
            <SliderMenu onSelectCategory={handleSelectCategory} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></div>
          </div>
          <header className="soap-header">
            <div className="soap-title-container">
              <h3>ПОКЕ-БОУЛ</h3>
              <h2>СБАЛАНСИРОВАННОЕ ПИТАНИЕ</h2>
            </div>
          </header>
          <div className="main-card-break">
            <CardSalad
              img={img1}
              title={"Будда"}
              text={
                "Состав: сыр Тофу, гречка, фасоль, маш, томаты черри, редис, морковь, тыква, свёкла, грецкий орех, тайский соус"
              }
              price={"300 с"}
              weight={"450 г"}
              icon1={icon1} // пщеница
              // icon2={icon2} // листок
              icon3={icon3} // лук
              //   icon4={icon4}// повар
              icon5={icon5} // докрашенный листок
              icon6={icon6} // бицепс
              // icon7={icon7} // без молока
              // icon8={icon8} // авакадо
              //   icon9={icon9} старбакс
            />
            <CardSalad
              img={img2}
              title={"С курицей"}
              text={
                "Состав: куриная грудка, кускус, яйцо, кукуруза, оливки , томаты черри, цветная капуста, микс салатов, соус сладкий Чили"
              }
              price={"465 с"}
              weight={"450 г"}
              icon1={icon1} // пщеница
              // icon2={icon2} // листок
              //   icon3={icon3}// лук
              //   icon4={icon4}// повар
              // icon5={icon5} // докрашенный листок
              icon6={icon6} // бицепс
              icon7={icon7} // без молока
              // icon8={icon8} // авакадо
              //   icon9={icon9} старбакс
            />
            <CardSalad
              img={img3}
              title={"С креветками"}
              text={
                "Состав: тигровые креветки , рис, творожный сыр, салат чукка, кукуруза, томаты черри, огурцы, морковь, ананас, арахис, соус Тобико"
              }
              price={"535 с"}
              weight={"450 г"}
              icon1={icon1} // пщеница
              // icon2={icon2} // листок
              //   icon3={icon3}// лук
              //   icon4={icon4}// повар
              // icon5={icon5} // докрашенный листок
              icon6={icon6} // бицепс
              // icon7={icon7} // без молока
              // icon8={icon8} // авакадо
              //   icon9={icon9} старбакс
            />
            <CardSalad
              img={img4}
              title={"С малосольной сёмгой"}
              text={
                "Состав: малосольная сёмга, киноа, творожный сыр, яйцо, картофель, брюссельская капуста, томаты черри, кабачки, красный лук, микс салатов, тайский соус "
              }
              price={"665 с"}
              weight={"450 г"}
              style={{ top: "115px" }}
              // icon1={icon1} // пщеница
              // icon2={icon2} // листок
              //   icon3={icon3}// лук
              //   icon4={icon4}// повар
              // icon5={icon5} // докрашенный листок
              // icon6={icon6} // бицепс
              // icon7={icon7} // без молока
              // icon8={icon8} // авакадо
              //   icon9={icon9} старбакс
            />
            <CardSalad
              img={img5}
              title={"С жареной форелью"}
              text={
                "Состав: филе форели, киноа, творожный сыр, яйцо, маш, томаты черри, огурцы, редис, шампиньоны, каперсы, микс салатов, тайский соус "
              }
              price={"465 с"}
              weight={"450 г"}
              icon1={icon1} // пщеница
              // icon2={icon2} // листок
              //   icon3={icon3}// лук
              //   icon4={icon4}// повар
              // icon5={icon5} // докрашенный листок
              icon6={icon6} // бицепс
              // icon7={icon7} // без молока
              // icon8={icon8} // авакадо
              style={{ top: "115px" }}
              //   icon9={icon9} старбакс
            />
          </div>
          <div style={{ paddingBottom: "200px" }}></div>
        </div>
      ) : (
        <>
          <div className="thousand-px">
            <h2>
              Данный сайт не потдерживает экраны больше 1000 px, пожалуйста
              уменьшите ваш экран, либо зайдите через мобильное устройство
            </h2>
          </div>
        </>
      )}
    </>
  );
}

export default MenuBoul;
