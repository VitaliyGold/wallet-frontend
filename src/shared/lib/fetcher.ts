import { convertToQueryUrl } from "./queryBuilder";

const fetcher = {
	// eslint-disable-next-line
    post: async (url: string, data: Record<string, any>) => {
		const response = await fetch(import.meta.env.FRONTEND_API_URL + url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify({
				data,
			}),
		});
		if (response.ok) {
			return response.json();
		}
		const error = await response.json();
		throw {
			name: error.error,
			code: String(error.statusCode),
			message: error.message,
		};
	},
	// eslint-disable-next-line
    delete: async (url: string, queryParams: Record<string, any>) => {
		const response = await fetch(
			`${import.meta.env.FRONTEND_API_URL}${url}?${convertToQueryUrl(queryParams)}`,
			{
				method: "DELETE",
			},
		);
		if (response.ok) {
			return response.json();
		}
		const error = await response.json();
		throw {
			name: error.error,
			code: String(error.statusCode),
			message: error.message,
		};
	},
	// eslint-disable-next-line
    update: async (url: string, data: Record<string, any>) => {
		const response = await fetch(import.meta.env.FRONTEND_API_URL + url, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify({
				data,
			}),
		});

		if (response.ok) {
			return response.json();
		}
		const error = await response.json();
		throw {
			name: error.error,
			code: String(error.statusCode),
			message: error.message,
		};
	},
	// eslint-disable-next-line
    get: async (url: string, queryParams: Record<string, any>) => {
		const response = await fetch(
			`${import.meta.env.FRONTEND_API_URL}${url}?${convertToQueryUrl(queryParams)}`,
			{
				method: "GET",
			},
		);
		if (response.ok) {
			return response.json();
		}
		const error = await response.json();
		throw {
			name: error.error,
			code: String(error.statusCode),
			message: error.message,
		};
	},
};

export { fetcher };
