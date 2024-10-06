import { apiClient } from "../base";
import { QuoteType } from "./types";

const BASE_URL =
	"https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=json&lang=ru";

export const getQuotes = (): Promise<QuoteType> => {
	return apiClient.get(BASE_URL);
};
