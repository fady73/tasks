import React from "react";
import ListPosts from "./component/ListPosts/ListPosts";
import ViewPost from "./component/ViewPost/ViewPost";

const routes = [
  {
    path: `/`,
    exact: true,
    name: "ListPosts",
    component: <ListPosts />,
  },
  {
    path: `/view/:id`,
    exact: true,
    name: "edit",
    component: <ViewPost />,
  },
];

export default routes;
