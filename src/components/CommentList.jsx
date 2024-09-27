import React from "react";
import { Comment } from "./Comment";

export const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />

      <div className="pl-10 border border-l-blck">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};
