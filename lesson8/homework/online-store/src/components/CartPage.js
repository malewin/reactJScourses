import { DelIcon } from "./DelIcon";
import { useState, useEffect } from "react";
import { InfoProducts } from "./Info";
import { useDispatch, useSelector } from "react-redux";
import { delAllProducts, delProduct } from "../actions/productActions";
import { Link } from "react-router-dom";

export const CartPage = () => {
  const products = useSelector((state) => state.products);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const sum = products.reduce((acc, product) => {
      // Удаляем символ $ и преобразуем строку в число
      const priceNumber = parseFloat(product.price.replace("$", ""));
      return acc + priceNumber;
    }, 0);
    setTotalSum(sum);
  }, [products]);

  return (
    <div>
      <div className="top-headCart center">
        <h2 className="top-headCart__headingCart">SHOPPING CART</h2>
      </div>

      <div className="cardForm-container center">
        <PurchasesBox />

        <div className="cartForm-wrupper">
          <form action="#" className="cartForm">
            <label htmlFor="">SHIPPING ADRESS</label>
            <input
              className="cartForm-input"
              type="text"
              placeholder="Bangladesh"
            />
            <input className="cartForm-input" type="text" placeholder="State" />
            <input
              className="cartForm-input"
              type="text"
              placeholder="Postcode / Zip"
            />
            <button className="cartForm__button" type="submit">
              Get a quote
            </button>
          </form>
          <div className="cartTotal">
            <div className="cartTotal__text">
              <div className="cartTotal__text_sub">
                <p>SUB TOTAL</p>
                <p>${totalSum}</p>
              </div>
              <div className="cartTotal__text_grand">
                <p>GRAND TOTAL</p>
                <p className="text_grand-color">${totalSum}</p>
              </div>
            </div>
            <button className="cartTotal__button">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PurchasesBox = () => {
  const [purchases, setPurchases] = useState([]);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const [quantity, setQuantity] = useState(2);

  const handleDeleteProduct = (id) => {
    dispatch(delProduct(id));
  };

  const handleDeleteAllPurchases = () => {
    dispatch(delAllProducts());
  };

  useEffect(() => {
    setPurchases(products);
  }, [products]);

  return (
    <div className="cardForm-wrapper">
      {purchases.map((purchase) => (
        <div key={purchase.id} className="formCard">
          <img
            className="formCard__photo"
            src={`images/${purchase.imgName}.png`}
            alt="product"
          />
          <div className="description">
            <h2 className="formCard__title">{purchase.title}</h2>
            <div className="list">
              <p className="list-price">
                Price: <span className="red">{purchase.price}</span>
              </p>
              <p className="list-price">
                Color: <span className="gray">{purchase.color}</span>
              </p>
              <p className="list-price">
                Size: <span className="gray">{purchase.size}</span>
              </p>
              <p className="list-price">
                Quantity:{" "}
                <input
                  className="list__cartInput"
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)} // Обработка изменений
                />
              </p>
            </div>
          </div>
          <button
            className="delete"
            onClick={() => handleDeleteProduct(purchase.id)}
          >
            <DelIcon />
          </button>
        </div>
      ))}

      <div className="cartButton">
        <button
          className="cartButton__shopping"
          onClick={handleDeleteAllPurchases}
        >
          Clear shopping cart
        </button>
        <Link to="/catalog">
          <button className="cartButton__shopping">Continue shopping</button>
        </Link>
      </div>
    </div>
  );
};
