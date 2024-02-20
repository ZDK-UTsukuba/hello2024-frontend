import { IRequests, IAuthRequests, query } from "./models/request";

class FetchRequests {
    url = new URL(process.env.NEXT_PUBLIC_SERVER_ADDRESS ? process.env.NEXT_PUBLIC_SERVER_ADDRESS : "http://localhost:8080")
    async Get(path, params) {
        const url = this.url
        url.pathname = path
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.set(key, value)
            });
        }

        const response = await fetch(url.toString(), {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
        });
        return response
    }

}
export { FetchRequests }