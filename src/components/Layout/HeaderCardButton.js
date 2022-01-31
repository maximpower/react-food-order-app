import React, { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

import styles from './HeaderCartButton.module.css';


export const HeaderCartButton = ({ onClick }) => {

  const cartContext = useContext(CartContext);
  const cartItems = cartContext.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button 
      onClick={onClick}
      className={styles.button}
    > 
      <span className={styles.icon}> <CartIcon /> </span>
      <span> Your Cart </span>
      <span className={styles.badge}> { cartItems }  </span>
    </button>
  )
}
