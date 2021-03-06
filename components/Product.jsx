import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price, direction } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <img
            src={urlFor(image && image[1])}
            alt="Avatar"
            className="avatar"
          />
          <div className="price-avatar-container">
            <p className="price-avatar">${price}</p>
          </div>
          {/* <span className="chef-avatar">0</span> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p className="product-name">{name}</p>
            <p className="product-direction">{direction}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
