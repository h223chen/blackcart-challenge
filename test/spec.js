var request = require("supertest");
/**
 * a small basic test suite
 *
 * Of course, if this was a production product, testing would need to
 * be way more rigorous. At the very least I would include testing around
 * custom test data for each integration, and see if the normalized data
 * is in the correct format, has the right fields, and contains the right values
 */
describe("basic test suite", function () {
  var server;
  beforeEach(function () {
    server = require("../start");
  });
  afterEach(function () {
    server.close();
  });
  it("responds to get products endpoint", function testSlash(done) {
    request(server).get("/stores/1/products").expect(200, done);
  });
  it("404 undefined store", function testPath(done) {
    request(server).get("/stores/12421231/products").expect(404, done);
  });
  it("404 everything else", function testPath(done) {
    request(server).get("/foo/bar").expect(404, done);
  });
});
