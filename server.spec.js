const request = require("supertest");
const server = require("./server");

describe("server.js", () => {
  describe("index route", () => {
    it("returns correct status code", () => {
      return request(server)
        .get("/")
        .expect(200);
    });

    it("returns the right content type", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });

    it("returns the correct content", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body).toBe(
            "The reports of my death have been greatly exaggerated"
          );
        });
    });
  });
});
