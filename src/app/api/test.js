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

