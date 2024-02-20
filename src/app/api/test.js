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
const testGetResponse = []
const testTagResponse = []
const testArticleResponse = []
class testRequests {
    async Get() {
        return mockPromise(testGetReponse)
    }
    async GetTag(tags) {
        return mockPromise(testTagResponse)
    }
    async GetArticle(article_id) {
        return mockPromise(testArticleResponse)

    }
}