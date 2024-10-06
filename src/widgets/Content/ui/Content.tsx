import { FC } from "react";
import styles from "./Content.module.css";

interface IContentProps {
	quoteText: string;
	quoteAuthor: string;
}

export const Content: FC<IContentProps> = (props) => {
	const { quoteText, quoteAuthor } = props;

	return (
		<div className={styles.content}>
			<h1 className={styles.title}>Random Quote</h1>

			{quoteText === "" ? "Загрузка..." : null}

			<div className={styles.quoteWrapper}>
				<p className={styles.quote}>{quoteText}</p>
				<p className={styles.author}>{quoteAuthor}</p>
			</div>
		</div>
	);
};
