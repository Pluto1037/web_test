import axios from 'axios';
// import storeUtil from "@/utils/store";

export async function FetchMessage(body: any) {
  return axios
    .get(`${BACK_API}/message`, { params: body })
    .then((res) => res.data);
}
