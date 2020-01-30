const db = require("../data/db-Config");

const Users = require("./api-model");

beforeEach(async () => {
  await db("users").truncate();
});

describe("Users api model", () => {
  describe("the add users function", () => {
    it("adds users to db", async () => {
      await Users.add({ name: "Tola", age: 54 });
      await Users.add({ name: "Dola", age: 52 });

      const users = await db("users");

      expect(users.length).toBe(2);
    });

    it("returns object of new user", async () => {
      const newUser = await Users.add({ name: "Bola", age: 54 });

      expect(newUser).toMatchObject({ name: "Bola", age: 54 });
    });

    it("saves age as number", async () => {
      const newUser = await Users.add({ name: "Bola", age: 54 });
      const age = await newUser.age;

      expect(typeof age).toBe("number");
    });
  });

  describe("the remove user function", () => {
    it("removes the user", async () => {
      await Users.add({ name: "Bola", age: 54 });
      await Users.add({ name: "Bolax", age: 55 });
      await Users.add({ name: "Bolay", age: 50 });

      await Users.remove(2);
      const deleted = await db("users")
        .where({ id: 2 })
        .first();

      expect(deleted).toBeUndefined();
    });
  });
});
