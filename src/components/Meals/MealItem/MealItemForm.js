import { useContext, useRef, useState } from "react";
import { CartContext } from "../../../store/cart-context";
import { Input } from "../../UI/Input";
import styles from "./MealItemForm.module.css";

export const MealItemForm = ({ id, onAddToCart }) => {
	const amountInputRef = useRef();
	const cartContext = useContext(CartContext);

  const [amountIsValid, setAmountIsValid] = useState();

	const submitHandler = (e) => {
		e.preventDefault();
		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +amountInputRef.current.value;

		if (enteredAmount.trim().length === 0 
        || enteredAmountNumber < 1 
        || enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
		}
    onAddToCart(enteredAmountNumber);
	};

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: `amount_${id}`,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button type="submit">
				+ Add
			</button>
      { !amountIsValid && <p>Please, enter a valid amount (1-5)</p> }
		</form>
	);
};
