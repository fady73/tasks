import actionTypes from "../action/ActionTypes";

const initialState = {
  postsList: null,
  detailsPost: null,
  comments: null,
};

export default function Posts(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_POSTS_RECIVIED:
      return {
        ...state,
        postsList: action.payload,
      };

    case actionTypes.GET_ALL_POSTS_REQUEST:
      return {
        ...state,
        postsList: null,
      };

    case actionTypes.GET_SINGLE_POST_RECIVIED:
      return {
        ...state,
        detailsPost: action.payload,
      };

    case actionTypes.GET_SINGLE_POST_REQUEST:
      return {
        ...state,
        detailsPost: null,
      };

    case actionTypes.GET_SINGLE_POST_COMMENTS_REQUEST:
      return {
        ...state,
        comments: null,
      };

    case actionTypes.GET_SINGLE_POST_COMMENTS_RECIVIED:
      return {
        ...state,
        comments: action.payload,
      };

    default:
      return state;
  }
}
