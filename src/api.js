import axios from "axios";

axios.defaults.baseURL = "";

export async function RegistrationONU(credentials) {
  const res = await axios.post("", credentials);
  return res;
}
