import { apiClient } from "../base";
import { QuoteType } from "./types";

const BASE_URL = "/?method=getQuote&key=random&format=json&lang=ru";

export const getQuotes = (): Promise<QuoteType> => {
	return apiClient.get();
};
