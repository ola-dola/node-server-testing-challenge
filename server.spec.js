const request = require("supertest");
const server = require("./server");

describe("server.js", () => {
  describe("index route", () => {
    it("returns correct status code", () => {
      return request(server)
        .get("/")
        .expect(200);
    });
  });
});
