import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import SubscribeBox from "./components/SubscribeBox";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import { CatalogPage } from "./components/Catalog";
import { ProductPage } from "./components/ProductPage";
import { CartPage } from "./components/CartPage";
import { RegistrationPage } from "./components/RegistrationPage";
import store from "./store/store";
import "./App.css";
import "./css/style.css";
import "./font/stylesheet.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <body> */}
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
        <SubscribeBox />
        <Footer />
        {/* </body> */}
      </Router>
    </Provider>
  );
}

export default App;
