import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  // AiFillStar,
  // AiOutlineStar,
} from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { GiCook } from "react-icons/gi";
import { MdMenuBook, MdVerified } from "react-icons/md";
import { RiCompassDiscoverFill } from "react-icons/ri";

import { client, urlFor } from "../../lib/client";
import { Product, Slider } from "../../components";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, chef, location, direction } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            <img src={urlFor(image && image[1])} className="small-image" />
            {/* {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))} */}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="chef-name">
            <p>
              <GiCook /> {chef} <MdVerified style={{color: '#1da1f2'}} />
            </p>
            <p>
              {/* <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar /> */}
            </p>
          </div>
          {/* <h4><MdLocationOn/></h4> */}
          <p>
            <RiCompassDiscoverFill /> {direction}
          </p>
          <p>
            <MdLocationOn /> {location}
          </p>

          {/* <h4>Details: </h4> */}
          <p>
            <MdMenuBook /> {details}
          </p>
          <div className="price-div">
            <p className="price">${price}</p>
          </div>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>Other Meals You May Like</h2>
        {/* <Slider /> */}
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
