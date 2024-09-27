import React from "react";
import { commentsData } from "../utils/mockCommentsData";
import { CommentList } from "./CommentList";

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
