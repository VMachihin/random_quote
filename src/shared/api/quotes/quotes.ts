import { apiClient } from "../base";
import { QuoteType } from "./types";

export const getQuotes = (): Promise<QuoteType> => {
	return apiClient.get();
};
