import axios from "axios";
import User from "./user";

export default class Api {
  public static async getAllUser(
    since: number,
    limit: number
  ): Promise<User[] | any> {
    try {
      let url = `https://api.github.com/users?per_page=${limit}`;
      if (since !== 0) url += `&since=${since - 1}`;
      const { data } = await axios<User>({
        method: "get",
        url,
      });

      return data;
    } catch (err) {
      return err;
    }
  }
}
