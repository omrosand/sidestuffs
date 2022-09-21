import wait from "waait";

//Imiterer database hvor vi henter users
export class UserService {
  async getUser() {
    await wait(200);
    return {
      id: 1,
      username: "ole",
    };
  }
}
