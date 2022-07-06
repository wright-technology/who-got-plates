import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { useStateContext } from '../context/StateContext';
// import { runFireworks } from '../lib/utils';

const Cancel = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    // runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
        <img src='https://www.graphicproducts.com/assets/images/products/2695-label.png' height={175}/>
        </p>
        <h2>Cancellation Confirmed</h2>
        <p className="email-msg">Your cart has been emptied.</p>
        <p className="description">
          If you have any questions, please email us at
          <a className="email" href="mailto:admin@whogotplates.com">
            admin@whogotplates.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Let's Start Over
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Cancel