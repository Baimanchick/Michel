import React, { useState } from "react";
import "../css/MenuPage.css";
import logo from "../images/else/Michelle Vector.svg";
import burger from "../images/else/Group 115.svg";
import arrowleft from "../images/else/Group 118.svg";
import arrowright from "../images/else/Group 117.svg";
import SliderMenu, { categories } from "../components/SliderMenu";
import FullscreenMenu from "../components/FullscreenMenu";
import { useNavigate } from "react-router-dom";
import CardMenu from "../components/CardMenu";
import CardMenuNav from "../components/CardMenuNav";

function MenuPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [categoryChange, setCategoryChange] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCategoryChange(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const navigate = useNavigate();

  return (
    <>
      <div style={{ fontSize: "38px", textAlign: "center", marginTop: "50px" }}>
        МЕНЮ
      </div>
      <div className="block-nav-menu">
        {categories.map((category) => {
          console.log(typeof category.img)
          return(
            <CardMenuNav title={category.name} img={category.img} link={category.link} />
          )
        })}
      </div>
    </>
  );
}

export default MenuPage;
