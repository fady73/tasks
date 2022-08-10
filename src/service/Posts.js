import http from "../http.js";
import notify from "../component/toaster/index";

export const getAllPost = async () => {
  try {
    const response = await http.get("/posts");
    return response;
  } catch (e) {
    notify(e.message);
    return null;
  }
};

export const getSinglePost = (id) => {
  return http.get(`/posts/${id}`);
};

export const getCommentsOfPost = (id) => {
  return http.get(`/comments?postId=${id}`);
};
