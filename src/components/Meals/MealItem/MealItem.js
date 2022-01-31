import { useContext } from "react";
import { CartContext } from "../../../store/cart-context";
import styles from "./MealItem.module.css";
import { MealItemForm } from "./MealItemForm";

export const MealItem = ({ name, description, price, id }) => {
	const displayPrice = `${price.toFixed(2)} $`;

	const cartContext = useContext(CartContext);

	const addToCartHandler = (amount) => {
		 cartContext.addItem({
			 id,
			 name,
			 amount: amount,
			 price
		 })
	}

	return (
		<li className={styles.meal}>
			<div>
				<div>
					<h3> {name} </h3>
				</div>
				<div className={styles.description}> {description} </div>
				<div className={styles.price}> {displayPrice} </div>
			</div>
			<div>
				<MealItemForm id={id} onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};
