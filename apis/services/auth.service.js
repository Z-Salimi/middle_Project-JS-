import { axiosClient } from "../client";
import { urls } from "../urls";

export async function login(data) {
  const response = await axiosClient().post(urls.auth.login, data);
  return response.data;
}
export async function signup(data) {
  const response = await axiosClient().post(urls.auth.signup, data);
  return response.data;
}