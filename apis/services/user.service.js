import { axiosClient } from "../client";
import { urls } from "../urls";

export async function getUserInfo() {
  const response = await axiosClient().get(urls.user);
  return response.data;
}
