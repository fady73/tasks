import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Table } from "antd";

import { getAllPosts } from "../../action/index";

import Header from "../Header/Header";

import "./ListPosts.css";

const ListPosts = (props) => {
  const { getPosts, postsList, history } = props;

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const columns = [
    {
      title: "Post Title",
      dataIndex: "title",
      sorter: (a, b) => a.title - b.title,
      render: (item) => (
        <h3>{item.length < 40 ? item : item.substring(0, 40) + " ..."}</h3>
      ),
    },
    {
      title: "Post Description",
      dataIndex: "body",
      sorter: (a, b) => a.body - b.body,
      render: (item) => (
        <h3>{item.length < 20 ? item : item.substring(0, 20) + " ..."}</h3>
      ),
    },
  ];

  return (
    <>
      <div className="br-home">
        <Header />

        <div className="br-home__listing-post">
          <Table
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  history.push(`/view/${record.id}`);
                }, // click row
              };
            }}
            columns={columns}
            dataSource={postsList}
            rowKey="id"
          />
          ;
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getAllPosts()),
});

const mapStateToProps = ({ Posts }) => {
  return { ...Posts };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListPosts));
