class MockResponse {
    body

    constructor(body) {
        this.body = body;
    }

    json() {
        return this.body;
    }
}
function mockPromise(result, delay = 0) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(result);
        }, delay);
    });
}

class testRequests {
    async Get() {
        return mockPromise({})
    }
    async GetTag(tags) {
        return mockPromise({})
    }
    async GetArticle(article_id) {
        return mockPromise({})

    }
}