import { FC } from "react";
import styles from "./Button.module.css";

interface IButtonProps {
	children: string;
	onClick?: () => void;
}

export const Button: FC<IButtonProps> = (props) => {
	const { children, onClick } = props;
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	);
};
