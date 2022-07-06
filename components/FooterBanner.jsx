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
          <p>{discount}</p>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText2}</p>
          <h3>{midText2}</h3>
          <p>{desc}</p>
          {/* <Link href="#">
            <button type="button">{buttonText}</button>
          </Link> */}
        </div>

        {/* <img 
          src={urlFor(image)} className="footer-banner-image"
        /> */}
      </div>
    </div>
  );
};

export default FooterBanner;
