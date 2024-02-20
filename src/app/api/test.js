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
const testGetResponse = [{
    article_name: "宿舎当日の流れ",
    tags: ["#宿舎", "#入学前", "#アドバイス"],
    abstract: "宿舎入居当日の流れという記事の導入部分がここに表示される？検索して該当した文章がハイライトされて表示されたりなど",
    update_time: "2024/02/02 0:30"
}, {
    article_name: "宿舎当日の流れ",
    tags: ["#宿舎", "#入学前", "#アドバイス"],
    abstract: "宿舎入居当日の流れという記事の導入部分がここに表示される？検索して該当した文章がハイライトされて表示されたりなど",
    update_time: "2024/02/02 0:30"
}]

const testTagResponse = []
const testArticleResponse = []
class testRequests {
    async Get() {
        return mockPromise(testGetResponse)
    }
    async GetTag(tags) {
        return mockPromise(testTagResponse)
    }
    async GetArticle(article_id) {
        return mockPromise(testArticleResponse)

    }
}
export { testRequests }