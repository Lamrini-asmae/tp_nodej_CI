const request = require('supertest');
const app = require('../app');  // Import the app

describe('GET /', () => {
  it('should return Hello World', (done) => {
    request(app)
      .get('/')  // Make a GET request to the root
      .expect(200)  // Expect a 200 status code
      .expect('Hello World', done);  // Expect the response body to be "Hello World"
  });
});
