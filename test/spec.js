var request = require("supertest");

describe("loading express", function () {
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
