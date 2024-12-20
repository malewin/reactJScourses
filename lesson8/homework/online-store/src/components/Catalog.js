import { Breadcrumbs } from "./Breadcrumbs";
import { CardProductContainer } from "./MainPage";
import React, { useContext } from "react";
import withFilter from "../hoc/withFilter";
import { FilterContext, FilterProvider } from "../contexts/filterContext";
import { InfoProducts } from "./Info";
import { useState, useEffect } from "react";

export const CatalogPage = () => {
  return (
    <FilterProvider>
      <CatalogContent />
    </FilterProvider>
  );
};

const CatalogContent = () => {
  const { filter } = useContext(FilterContext); // Получаем текущий фильтр
  const filteredProducts = withFilter(InfoProducts, filter);

  return (
    <div>
      <Breadcrumbs />
      <div className="specifications center ">
        <div className="filter-container">
          <details className="filter">
            <summary>
              <div className="filter-wrupper">
                <div className="filter__title">FILTER</div>
                <div className="filter-block">
                  <div className="filter-block_up"></div>
                  <div className="filter-block_center"></div>
                  <div className="filter-block_down"></div>
                </div>
              </div>
            </summary>
            <FilterContent filterName={"CATEGORY"} />
            <FilterContent filterName={"BRAND"} />
            <FilterContent filterName={"DESIGNER"} />
          </details>
        </div>
        <div className="check-catalog">
          <div className="checkbox-container">
            <div className="checkbox__title">
              <p className="checkbox__text">TRENDING NOW</p>
              <div className="checkbox__image"></div>
            </div>
            <div className="checkbox__choice checkbox__choice_width">
              <CheckBox label={" Nike"} />
              <CheckBox label={" Adidas"} />
            </div>
          </div>
          <div className="checkbox-container">
            <div className="checkbox__titleSize">
              <p className="checkbox__text checkbox__text_widthCatalog">SIZE</p>
              <div className="checkbox__image"></div>
            </div>
            <div className="checkbox__choiceSize">
              <CheckBox2 label={" XS"} size="XS" />
              <CheckBox2 label={" S"} size="S" />
              <CheckBox2 label={" M"} size="M" />
              <CheckBox2 label={" L"} size="L" />
            </div>
          </div>
          <div className="checkbox-container checkbox-container_price">
            <div className="checkbox__title checkbox__title_price">
              <p className="checkbox__text checkbox__text_widthCatalog">
                PRICE
              </p>
              <div className="checkbox__image"></div>
            </div>
            <div className="checkbox__choice checkbox__choice_widthMobile">
              <CheckBox label={` &lt;$50`} />
              <CheckBox label={` &gt;$50`} />
            </div>
          </div>
        </div>
      </div>
      <CardProductContainer
        children={<Slider />}
        arrayProducts={filteredProducts}
      />
    </div>
  );
};

const FilterContent = ({ filterName }) => {
  return (
    <div className="filter-content">
      <details className="filter-category">
        <summary>
          <div className="filter-category__title">
            <div className="before-block"></div>
            {filterName}
          </div>
        </summary>
        <div className="filter-category__desc">
          <p>Accessories</p>
          <p>Bags</p>
          <p>Denim</p>
          <p>Hoodies & Sweatshirts</p>
          <p>Jackets & Coats</p>
          <p>Polos</p>
          <p>Shirts</p>
          <p>Shoes</p>
          <p>Sweaters & Knits</p>
          <p>T-Shirts</p>
          <p>Tanks</p>
        </div>
      </details>
    </div>
  );
};

export const CheckBox = ({ label }) => {
  return (
    <div>
      <input type="checkbox" />
      <label dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  );
};

const CheckBox2 = ({ label, size }) => {
  const { filter, setFilter } = useContext(FilterContext);
  const isChecked = filter.includes(size); // Проверяем, отмечен ли чекбокс

  const handleChange = () => {
    const newFilter = isChecked
      ? filter.filter((item) => item !== size) // Удаление размера
      : [...filter, size]; // Добавление размера

    setFilter(newFilter); // Обновляем фильтр в контексте
    console.log(
      `Checkbox ${isChecked ? "unchecked" : "checked"}:`,
      size,
      "New filter:",
      newFilter
    );
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <label>{label}</label>
    </div>
  );
};

const Slider = () => {
  return (
    <div className="slider-navigation">
      <div className="slider__container">
        <img
          className="slider_img"
          src="images/slider-left.png"
          alt="slider left"
        />
        <div className="slider_number">
          <span className="slider_num-color">1</span>
          <span className="slider_num">2</span>
          <span className="slider_num">3</span>
          <span className="slider_num">4</span>
          <span className="slider_num">5</span>
          <span className="slider_num">6.....20</span>
        </div>
        <img
          className="slider_img"
          src="images/slider-right.png"
          alt="slider right"
        />
      </div>
    </div>
  );
};
