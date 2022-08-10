import { all, fork } from "redux-saga/effects";
import postsWatcher from "./postsSaga";

export default function* rootSaga() {
  yield all([fork(postsWatcher)]);
}
