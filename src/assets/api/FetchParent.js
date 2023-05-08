import { BASE_URL } from "../constant/ApiConstants";

export const fetchPerent = async ({ queryKey }) => {
  const page = queryKey[1];
  const limit = queryKey[2];
  const apiRes = await fetch(`${BASE_URL}parent?page=${page}&limit=${limit}`, {
    method: "GET",
  });

  if (!apiRes.ok) {
    throw new Error("Somthing went wrong in fetch perent");
  }

  return apiRes.json();
};
