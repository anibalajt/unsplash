import request from "superagent";
// import photos from "./photos.json";
// import user from "./user.json";
const APP_ID = "23113";
const APP_SECRET =
  "1b67bb49fc48912764aa4a54eaf2f87453ae67b57fabfa2986bae0e7ab05130c";
const CALLBACK_URL = "urn:ietf:wg:oauth:2.0:oob";
const URL = "https://api.unsplash.com/";

export const getListPhotos = async (endPoint, page = 1, per_page = 15) => {
  const { ok, body, error } = await request.get(
    `${URL}${endPoint}?page=${page}&per_page=${per_page}&client_id=${APP_SECRET}`
  );
  console.log("body:", body);
  if (ok) {
    return body;
  }
  // if (true) {
  //   return photos;
  // }
  return error;
};
export const getProfile = async username => {
  const { ok, body, error } = await request.get(
    `${URL}users/${username}?client_id=${APP_SECRET}`
  );
  if (ok) {
    return body;
  }
  return error;
};
