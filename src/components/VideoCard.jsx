import React from "react";

const VideoCard = ({ info }) => {
  const { thumbnails, channelTitle, title } = info.snippet;
  const { likeCount, viewCount } = info.statistics;

  return (
    <div className="md:p-2 md:m-2 w-full md:w-72">
      <img src={thumbnails.high.url} />
      <div className="p-2">
        <h1 className="font-bold">{title}</h1>
        <h2>{channelTitle}</h2>
        <h3>{likeCount} Likes</h3>
        <h3>{viewCount} Views</h3>
      </div>
    </div>
  );
};
export default VideoCard;
