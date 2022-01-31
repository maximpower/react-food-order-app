import React from "react";

import mealsImg from '../../assets/meals.jpeg';

import styles from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCardButton";

export const Header = ({toggleCartVisibility}) => {
	return (
		<>
			<header className={styles.header}>
				<h1> ReactMeals</h1>
				<HeaderCartButton onClick={toggleCartVisibility}> Cart </HeaderCartButton>
			</header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt="A table full of delicious food" />
      </div>
		</>
	);
};
