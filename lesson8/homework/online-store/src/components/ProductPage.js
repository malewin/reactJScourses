import { Breadcrumbs } from "./Breadcrumbs";
import { CheckBox } from "./Catalog";
import { InfoProducts } from "./Info";
import { Link } from "react-router-dom";

export const ProductPage = () => {
  return (
    <div>
      <Breadcrumbs />
      <div className="slider">
        <button className="slider__button_left"> &lt; </button>
        <div className="slider-box">
          <img src="images/slider_image1.png" alt="Фото продукта 1" />
        </div>
        <button className="slider__button_right"> &gt; </button>
      </div>

      <div className="women-collectionConatainer">
        <div className="women-collection">
          <h2 className="women-collection__title">WOMEN COLLECTION</h2>
          <span className="women-collection__subtitle">
            MOSCHINO CHEAP AND CHIC
          </span>
          <p className="women-collection__discription">
            Compellingly actualize fully researched processes before proactive
            outsourcing. Progressively syndicate collaborative architectures
            before cutting-edge services. Completely visualize parallel core
            competencies rather than exceptional portals.
          </p>
          <span className="women-collection__price">$561</span>
          <div className="option-box">
            <div className="checkbox-container">
              <div className="checkbox__title">
                <p className="checkbox__text">CHOOSE COLOR</p>
                <div className="checkbox__image"></div>
              </div>
              <div className="checkbox__choice checkbox__choice_product">
                <CheckBox label={"Red"} />
                <CheckBox label={"Blue"} />
              </div>
            </div>

            <div className="checkbox-container checkbox__title_widthSize">
              <div className="checkbox__title checkbox__title_widthSize">
                <p className="checkbox__text checkbox__text_product">
                  CHOOSE SIZE
                </p>
                <div className="checkbox__image"></div>
              </div>
              <div className="checkbox__choice">
                <CheckBox label={"XL"} />
                <CheckBox label={"M"} />
              </div>
            </div>
            <div className="checkbox-container checkbox__title_widthQuantity">
              <div className="checkbox__title checkbox__title_widthQuantity">
                <p className="checkbox__text checkbox__text_productQuantity">
                  QUANTITY
                </p>
                <div className="checkbox__image"></div>
              </div>
              <div className="checkbox__choice checkbox__title_widthQuantity">
                <CheckBox label={"1"} />
                <CheckBox label={"2"} />
              </div>
            </div>
          </div>
          <button className="women-collection__button-add">
            <img src="images/basket_pink.png" alt="Корзина" />
            <div className="button-text">Add to Cart</div>
          </button>
        </div>
      </div>

      <ProductBox />
    </div>
  );
};

const ProductBox = () => {
  return (
    <div className="product-box center">
      {InfoProducts.filter((product) => product.id < 4).map((product) => (
        <div key={product.id} className="product">
          <img
            className="product__img"
            src={`images/product${product.id}.png`}
            alt="Первый продукт"
          />
          <div className="product__content">
            <Link to="/product" className="product__name">
              {product.title}
            </Link>
            <p className="product__text">{product.description}</p>
            <p className="product__price">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
