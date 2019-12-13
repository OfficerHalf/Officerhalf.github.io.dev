import butter from "buttercms";
import { AxiosResponse } from "axios";
import { ButterListResponse } from "../interfaces/ButterListResponse";

// This is readonly, why are you stealing it?
const awBeans = "9ffd3dad4fd54423ad22bc3ce3e1a2fd6bbc9081";

const ButterApi = butter(awBeans);

export function postList(): Promise<AxiosResponse<ButterListResponse>> {
  return ButterApi.post.list() as Promise<AxiosResponse<ButterListResponse>>;
}
