import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText2,
    saleTime,
    smallText2,
    midText2,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p
            style={{
              fontSize: "large",
              textShadow: "1px 1px 5px black, black 1px 1px 5px",
              fontWeight: "600",
            }}
          >
            {discount}
          </p>
          <h3>{largeText2}</h3>
          <p
            style={{
              fontSize: "large",
              textShadow: "1px 1px 5px black, black 1px 1px 5px",
              fontWeight: "600",
            }}
          >
            {saleTime}
          </p>
        </div>
        <div className="right">
          <p
            style={{
              fontSize: "large",
              textShadow: "1px 1px 5px black, black 1px 1px 5px",
              fontWeight: "600",
            }}
          >
            {/* {smallText2} */}
          </p>
          <h3>{midText2}</h3>
          <p
            style={{
              fontSize: "large",
              textShadow: "1px 1px 5px black, black 1px 1px 5px",
              fontWeight: "600",
            }}
          >
            {desc}
          </p>
          {/* <Link href="#">
            <button type="button">{buttonText}</button>
          </Link> */}
        </div>

        <img src={urlFor(image && image[0])} className="footer-banner-image" />
        <img src={urlFor(image && image[1])} className="footer-banner-image-two" />
      </div>
    </div>
  );
};

export default FooterBanner;
