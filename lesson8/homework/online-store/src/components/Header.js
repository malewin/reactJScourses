import "../css/style.css";
import "../font/stylesheet.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="header center">
      <div className="header__left">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="Логотип" />
        </Link>
        <div className="header-search">
          <img src="/images/search.png" alt="search" />
          <input
            className="header-searchInput"
            type="text"
            placeholder="search"
          />
        </div>
      </div>
      <div className="header__right">
        <details>
          <summary>
            <div className="header__right_burger"></div>
          </summary>
          <nav className="breadcrumbsBurger">
            <Link to={"/registration"} className="breadcrumbsBurger__user">
              Вход / Регистрация
            </Link>
            <Link
              to={"/cart"}
              className="breadcrumbsBurger__user breadcrumbsBurger__user_basket"
            >
              Корзина
            </Link>
            <h3 className="breadcrumbsBurger__title">MENU</h3>
            <div className="breadcrumbsBurger__listContainer">
              <Link to={"/catalog"} className="breadcrumbsBurger__subtitle">
                MAN
              </Link>
              <ul className="breadcrumbsBurger__list">
                <li>
                  <Link
                    to={"/catalog"}
                    className="breadcrumbsBurger__link_menu"
                  >
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/catalog"}
                    className="breadcrumbsBurger__link_menu"
                  >
                    Bags
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/catalog"}
                    className="breadcrumbsBurger__link_menu"
                  >
                    Denim
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/catalog"}
                    className="breadcrumbsBurger__link_menu"
                  >
                    T-Shirts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="breadcrumbsBurger__listContainer">
              <Link to={"/catalog"} className="breadcrumbsBurger__subtitle">
                WOMAN
              </Link>
              <ul className="breadcrumbsBurger__list">
                <li>
                  <Link
                    to={"/catalog"}
                    className="breadcrumbsBurger__link_menu"
                  >
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/catalog"}
                    className="breadcrumbsBurger__link_menu"
                  >
                    Jackets & Coats
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/catalog"}
                    className="breadcrumbsBurger__link_menu"
                  >
                    Polos
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/catalog"}
                    className="breadcrumbsBurger__link_menu"
                  >
                    T-Shirts
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/catalog"}
                    className="breadcrumbsBurger__link_menu"
                  >
                    Shirts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="breadcrumbsBurger__listContainer">
              <Link to={"/catalog"} className="breadcrumbsBurger__subtitle">
                KIDS
              </Link>
              <ul className="breadcrumbsBurger__list">
                <li>
                  <Link
                    to={"/catalog"}
                    className="breadcrumbsBurger__link_menu"
                  >
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/catalog"}
                    className="breadcrumbsBurger__link_menu"
                  >
                    Jackets & Coats
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/catalog"}
                    className="breadcrumbsBurger__link_menu"
                  >
                    Polos
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/catalog"}
                    className="breadcrumbsBurger__link_menu"
                  >
                    T-Shirts
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/catalog"}
                    className="breadcrumbsBurger__link_menu"
                  >
                    Shirts
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/catalog"}
                    className="breadcrumbsBurger__link_menu"
                  >
                    Bags
                  </Link>
                </li>
              </ul>
            </div>
            <button className="breadcrumbsBurger__buttonClose">
              <img src="/images/close_button-Burger.png" alt="button close" />
            </button>
          </nav>
        </details>
        <Link to="/registration" className="header__right_user">
          <img src="/images/user.png" alt="Пользователь" />
        </Link>
        <div className="header__right_basket">
          <Link to="/cart">
            <img src="/images/basket.png" alt="Корзина" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
