import request from "superagent";
// import photos from "./photos.json";
// import collection from "./collection.json";
// import search from "./search.json";
const APP_ID = "23113";
const APP_SECRET =
  "1b67bb49fc48912764aa4a54eaf2f87453ae67b57fabfa2986bae0e7ab05130c";
const CALLBACK_URL = "urn:ietf:wg:oauth:2.0:oob";
const URL = "https://api.unsplash.com/";

export const getPhotos = async (
  endPoint,
  page = 1,
  per_page = 15,
  order_by,
  query
) => {
  let param = "?";
  param += page ? `page=${page}&` : "";
  param += per_page ? `per_page=${per_page}&` : "";
  param += order_by ? `order_by=${order_by}&` : "";
  param += query ? `query=${query}&` : "";
  param += APP_SECRET ? `client_id=${APP_SECRET}` : "";
  console.log("param:", param);
  const { ok, body, error } = await request.get(`${URL}${endPoint}?${param}`);
  if (ok) {
    return body;
  }
  // if (true) {
  //   return search;
  // }
  return error;
};
export const post = async (endpoint, param) => {
  console.log(endpoint, param);
  request
    .post(`${URL}${endpoint}?client_id=${APP_SECRET}`)
    .send(param)
    .then(function(res) {
      console.log(res);
    });
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
