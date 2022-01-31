import React from 'react';

import styles from "./Input.module.css";

export const Input = React.forwardRef(({ input, label}, ref) => {


  const { id } = input;
	return (
		<div className={styles.input}>
			<label htmlFor={id}>{label}</label>
			<input {...input} ref={ref} />
		</div>
	);
});
