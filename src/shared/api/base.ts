const PROXY = "https://thingproxy.freeboard.io/fetch/";
const BASE_URL = "https://api.forismatic.com/api/1.0";

export class ApiClient {
	private async _checkResponse<TResult>(response: Response): Promise<TResult> {
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		try {
			return await response.json();
		} catch (error) {
			console.log(error);
			throw new Error("Error parsing JSON response");
		}
	}

	public async get<TResult = unknown>(): Promise<TResult> {
		const params = new URLSearchParams({
			method: "getQuote",
			key: "random",
			format: "json",
			lang: "ru",
		});
		const response = await fetch(`${PROXY}${BASE_URL}/?${params.toString()}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		});

		return this._checkResponse<TResult>(response);
	}
}

export const apiClient = new ApiClient();
