import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getSinglePost, getSinglePostComments } from "../../action/index";

import Header from "../Header/Header";
import { Card } from "antd";

import "./ViewPost.css";

const ViewPost = (props) => {
  const {
    getPost,
    match: {
      params: { id },
    },
    detailsPost,
    getComments,
    comments,
  } = props;

  useEffect(() => {
    getPost(id);
    getComments(id);
  }, [getPost, id, getComments]);

  return (
    <>
      <div className="br-view-post">
        <Header />
        {console.log(comments)}
        <div>
          <h4> userId:{detailsPost?.userId}</h4>
          <h3>Titile:{detailsPost?.title}</h3>
          <h4> Description:{detailsPost?.body}</h4>
        </div>
        <div className="card-wrapper">
          <h2>all comments</h2>
          {comments &&
            comments.length !== 0 &&
            comments.map((item) => (
              <>
                <Card title={`${item.name} /${item.email}`} bordered={false}>
                  {item.body}
                </Card>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getPost: (id) => dispatch(getSinglePost(id)),
  getComments: (id) => dispatch(getSinglePostComments(id)),
});

const mapStateToProps = ({ Posts }) => {
  return { ...Posts };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ViewPost));
