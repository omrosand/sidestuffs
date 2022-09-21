export function myFunc(a, b) {
  if (typeof a === "string") {
    return "This is a string";
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return 5;
}

export const fetchUsers = async (userService) => {
  const user = await userService.getUser();
  return user;
};
