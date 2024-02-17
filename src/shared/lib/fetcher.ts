const fetcher = {
    post: async (url: string, data: Record<string, any>) => {
        const response = await fetch(import.meta.env.FRONTEND_API_URL + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                data
            }),
        })
        if (response.ok) {
            return response.json();
        }
        const error = await response.json();
        throw {
            name: error.error,
            code: String(error.statusCode),
            message: error.message
        };
    },
    delete: async (url: string, queryParams: Record<string, any>) => {
        const response = await fetch(`${import.meta.env.FRONTEND_API_URL}${url}?${new URLSearchParams(queryParams).toString()}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            return response.json();
        }
        const error = await response.json();
        throw {
            name: error.error,
            code: String(error.statusCode),
            message: error.message
        };
    },
    update: async (url: string, data: Record<string, any>) => {
        const response = await fetch(import.meta.env.FRONTEND_API_URL + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                data
            }),
        })

        if (response.ok) {
            return response.json();
        }
        const error = await response.json();
        throw {
            name: error.error,
            code: String(error.statusCode),
            message: error.message
        };
    },
    get: async (url: string, queryParams: Record<string, any>) => {
        const response = await fetch(`${import.meta.env.FRONTEND_API_URL}${url}?${new URLSearchParams(queryParams).toString()}`, {
            method: 'GET'
        });
        if (response.ok) {
            return response.json();
        }
        const error = await response.json();
        throw {
            name: error.error,
            code: String(error.statusCode),
            message: error.message
        };
    }
};

export {
    fetcher,
}