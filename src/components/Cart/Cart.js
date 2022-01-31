import React, { useContext } from "react";
import { Modal } from "../UI/Modal";
import { CartContext } from '../../store/cart-context';

import styles from "./Cart.module.css";

export const Cart = ({ toggleCartVisibility }) => {

	const cartContext = useContext(CartContext);

	const totalAmount = `${cartContext.totalAmount.toFixed(2)}$`; 
	const hasItems = cartContext.items.length > 0;

	const cartItems = (
		<ul className={styles["cart-items"]}>
			{ cartContext.items.map((item) => (
				<li key={item.id}> {item.name} </li>
			))}
		</ul>
	);

	return (
		<Modal toggleCartVisibility={toggleCartVisibility} >
    {cartItems}
			<div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions} >
        <button onClick={toggleCartVisibility} className={styles['button--alt']}>Close</button>
        { hasItems && <button className={styles.button}>Order</button> }
      </div>
		</Modal>
	);
};
