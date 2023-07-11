import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Product } from "../models/product.model";

const ProductCard: FC<{ item: Product }> = (props) => {
  return (
    <div
      className="shadow rounded d-flex flex-column align-items-center justify-content-center"
      style={{ width: 350, height: "fit" }}
    >
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img
          style={{ width: 150 }}
          src={props.item.MainUrl}
          alt={props.item.productName}
        />
        <h4>{props.item.productName}</h4>
        <h5>
          price:
          {props.item.productDiscount > 0 && <s>{props.item.productPrice}</s>}
          {props.item.productPrice -
            props.item.productPrice * (props.item.productDiscount / 100)}
        </h5>

        <h6 className="d-flex">
          Discount:{props.item.productDiscount}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              style={{width:25}}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6h.008v.008H6V6z"
              />
            </svg>
          </span>
        </h6>
      </div>
      <div className=" d-flex gap-3">
        <Link to={`/editProduct/${props.item.productId}`}>
          <button className="btn btn-warning">edit product</button>
        </Link>
        <Link to={`/products/${props.item.productId}`}>
          <button className="btn btn-success">see details</button>
        </Link>
      </div>
    </div>
  );
};
export default ProductCard;
