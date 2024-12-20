import { InfoProducts, InfoBonus, InfoCategory } from "./Info";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/productActions";
import { Link } from "react-router";

const MainPage = () => {
  return (
    <div>
      <div className="brandFashion-container">
        <img src="/images/brand_image.svg" alt="Фото брендовой одежды" />
        <div className="brandFashion">
          <div className="brandFashion__beforeLine"></div>
          <div className="brandFashion__textBlock">
            <div className="brandFashion__textBlock_title">THE BRAND</div>
            <div className="brandFashion__textBlock_subtitle">
              <div>OF LUXERIOUS</div>
              <div className="brandFashion__mainColor">FASHION</div>
            </div>
          </div>
        </div>
      </div>

      <CategoryContainer />

      <div className="cards-product center">
        <div className="cards-product__textWrupper">
          <div className="cards-product__title">Fetured Items</div>
          <p className="cards-product__description">
            Shop for items based on what we featured in this week
          </p>
        </div>
        <CardProductContainer
          arrayProducts={InfoProducts}
          condition={(product) => product.id < 7}
        />
        <button className="cards-product__button">Browse All Product</button>
      </div>

      <BonusContainer />
    </div>
  );
};

const CategoryContainer = () => {
  return (
    <div className="category-conteiner center">
      {InfoCategory.map((category) => (
        <Link to="/product">
          <div
            key={category.id}
            className={`category__content${
              category.id < 4 ? "" : "_accesories"
            }`}
          >
            <img src={`/images/${category.imgName}`} alt={category.alt} />

            <div
              className={`category__content_overlay${
                category.id < 4 ? "" : "-accesories"
              }`}
            ></div>
            <div className="category__content_text">
              <div className="category__content_cardText">{category.title}</div>
              <div className="category__content_cardTextColor">
                {category.text}
              </div>
            </div>
          </div>
        </Link>
      ))}
      ;
    </div>
  );
};

export const CardProductContainer = ({
  children,
  arrayProducts,
  condition = () => true,
}) => {
  const dispatch = useDispatch();

  const mainByFilteredProducts = arrayProducts.filter(condition);

  function handleAddToCart(product) {
    dispatch(
      addProduct(
        product.title,
        product.imgName,
        product.description,
        product.price,
        product.color,
        product.size
      )
    );
    alert("Товар добавлен в корзину");
    console.log("Товар добавлен в корзину");
  }
  return (
    <div className="cards-product__container center">
      {mainByFilteredProducts.map((product) => (
        <div key={product.id} className="card">
          <img
            src={`/images/${product.imgName}.png`}
            alt={`product-${product.id}`}
          />
          <div className="card__hover">
            <div className="card__overlayImg"></div>
            <button
              className="card__button"
              onClick={() => handleAddToCart(product)}
            >
              <img src="/images/basket.png" alt="basket" />
              Add to Card
            </button>
          </div>
          <div className="card__text">
            <h2 className="card__title">{product.title}</h2>
            <p className="card__description">{product.description}</p>
            <p className="card__price">{product.price}</p>
          </div>
        </div>
      ))}
      {children}
    </div>
  );
};

const BonusContainer = () => {
  return (
    <div className="bonuses">
      {InfoBonus.map((bonus) => (
        <div key={bonus.id} className="bonuses__position">
          <img src={`/images/${bonus.imgName}`} alt={bonus.alt} />
          <p className="bonuses__title">{bonus.title}</p>
          <p className="bonuses__description">{bonus.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
