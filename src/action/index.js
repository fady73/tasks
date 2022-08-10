import actionTypes from "./ActionTypes";

export const getAllPosts = () => ({
  type: actionTypes.GET_ALL_POSTS_REQUEST,
});

export const getSinglePost = (id) => ({
  type: actionTypes.GET_SINGLE_POST_REQUEST,
  id,
});

export const getSinglePostComments = (id) => ({
  type: actionTypes.GET_SINGLE_POST_COMMENTS_REQUEST,
  id,
});
