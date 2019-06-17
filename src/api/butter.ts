import axios, { AxiosInstance } from 'axios';

// It's read only anyway. Why are you stealing this?
const awBeans: string = '9ffd3dad4fd54423ad22bc3ce3e1a2fd6bbc9081';
const contentEndpoint: string = 'https://api.buttercms.com/v2/content/';

export class ButterApi {
  private api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: contentEndpoint,
      params: {
        auth_token: awBeans
      }
    });
  }

  public getSpells();
}
