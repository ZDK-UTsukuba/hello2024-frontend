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

class CardRequests {
    Requests
    constructor(Requests) {
        this.Requests = Requests
    }
    async Get() {
        const response = await this.Requests.Get('/api/card')
        const data = await response.json()
        return data
    }
    async GetTag(tags) {
        const response = await this.Requests.Get('/api/card', { "keyword": tags.join('+') })
        const data = await response.json()
        return data
    }
    async GetDetail(article_id) {
        const response = await this.Requests.Get('/api/article/' + article_id)
        const data = await response.json()
        return data
    }
}
export { FetchRequests, CardRequests }