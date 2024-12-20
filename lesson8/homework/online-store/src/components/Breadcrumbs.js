import { Link } from "react-router-dom";
import React from "react";

export const Breadcrumbs = () => {
  return (
    <div className="top-head center ">
      <h2 className="top-head__heading">NEW ARRIVALS</h2>
      <div className="breadcrumbs">
        <Link to="/" className="breadcrumbs__link">
          HOME /
        </Link>
        <Link to="/catalog" className="breadcrumbs__link ">
          MAN
        </Link>
        <Link
          to="/product"
          className="breadcrumbs__link breadcrumbs__link_site"
        >
          / NEW ARRIVALS
        </Link>
      </div>
    </div>
  );
};
