import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const CartWidget = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="badge rounded-pill text-bg-secondary cart-notification">8</span>
    </div>
  );
};

export default CartWidget;
