import { put, takeLatest } from "redux-saga/effects";
import actionTypes from "../action/ActionTypes";
import * as Posts from "../service/Posts";
import notify from "../component/toaster/index";

function* fetchAllPosts() {
  try {
    const res = yield Posts.getAllPost();
    yield put({
      type: actionTypes.GET_ALL_POSTS_RECIVIED,
      payload: res ? res : [],
    });
  } catch (err) {
    notify(err.message);
  }
}

function* fetchDetailsPost({ id }) {
  try {
    const res = yield Posts.getSinglePost(id);
    yield put({
      type: actionTypes.GET_SINGLE_POST_RECIVIED,
      payload: res ? res : null,
    });
  } catch (err) {
    notify(err.message);
  }
}

function* fetchDetailsCommentsPost({ id }) {
  try {
    const res = yield Posts.getCommentsOfPost(id);
    yield put({
      type: actionTypes.GET_SINGLE_POST_COMMENTS_RECIVIED,
      payload: res ? res : null,
    });
  } catch (err) {
    notify(err.message);
  }
}

export default function* postsWatcher() {
  yield takeLatest(actionTypes.GET_ALL_POSTS_REQUEST, fetchAllPosts);
  yield takeLatest(actionTypes.GET_SINGLE_POST_REQUEST, fetchDetailsPost);
  yield takeLatest(
    actionTypes.GET_SINGLE_POST_COMMENTS_REQUEST,
    fetchDetailsCommentsPost
  );
}
