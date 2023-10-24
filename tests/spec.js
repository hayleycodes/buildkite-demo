const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  test("Should get a response", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
