import Axios, { AxiosInstance } from "axios";
import { GetPostsResponse } from "../interfaces/GetPostsResponse";

const awBeans: string = "9ffd3dad4fd54423ad22bc3ce3e1a2fd6bbc9081";

export class butter {
  private client: AxiosInstance;
  constructor() {
    this.client = Axios.create({
      baseURL: "https://api.buttercms.com/v2/",
      params: {
        auth_token: awBeans
      }
    });
  }

  public getPosts(): Promise<GetPostsResponse> {
    return this.client
      .get<GetPostsResponse>("pages/blog_post", {})
      .then(postData => {
        return postData.data;
      });
  }
}
