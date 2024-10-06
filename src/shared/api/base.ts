const PROXI = "https://cors-anywhere.herokuapp.com/";

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

	public async get<TResult = unknown>(url: string): Promise<TResult> {
		const response = await fetch(`${PROXI}${url}`, {
			method: "GET",
		});

		return this._checkResponse<TResult>(response);
	}
}

export const apiClient = new ApiClient();
