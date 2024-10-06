import { useEffect, useState } from "react";
import { Container } from "shared/ui/Container";
import { QuoteType } from "shared/api/quotes/types";
import { colors } from "shared/lib/colors";
import { getQuotes } from "shared/api/quotes";
import { Content } from "widgets/Content";
import { Button } from "shared/ui/Button";
import "./styles/global.css";

function App() {
	const [quotes, setQuotes] = useState<QuoteType>({
		quoteText: "",
		quoteAuthor: "",
	});

	useEffect(() => {
		fetchQuotes();
	}, []);

	const randomColors = Math.floor(Math.random() * colors.length);

	const fetchQuotes = () => {
		getQuotes().then((quote) => setQuotes(quote));
	};

	return (
		<main className='main' style={{ backgroundColor: colors[randomColors] }}>
			<Container>
				<Content {...quotes} />

				<Button onClick={fetchQuotes}>Загрузить цитату</Button>
			</Container>
		</main>
	);
}

export default App;
