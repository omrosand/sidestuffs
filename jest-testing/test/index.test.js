import { myFunc, fetchUsers } from "../src";
import { UserService } from "../src/UserService";

it("should return 5 when called without param", () => {
  const result = myFunc();

  expect(result).toBe(5);
});
it('should return "This is a string" if string is passed to function', () => {
  const result = myFunc("hey");

  expect(result).toBe("This is a string");
});
it("should return sum if passed 2 numbers", () => {
  const result = myFunc(5, 3);

  expect(result).toBe(8);
});

it("should fetch a user from database", async () => {
  const userService = new UserService();
  const user = await fetchUsers(userService);

  expect(user.id).toBe(1);
});
