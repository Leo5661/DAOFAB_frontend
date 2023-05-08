import { BASE_URL } from "../constant/ApiConstants";

export const fetchChild = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`${BASE_URL}child/${id}`, {
    method: "GET",
  });

  if (!apiRes.ok) {
    throw new Error("Somthing went wrong in fetch child");
  }

  return apiRes.json();
};
