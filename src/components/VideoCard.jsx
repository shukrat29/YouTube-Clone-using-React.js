import React from "react";

const VideoCard = ({ info }) => {
  const { thumbnails, channelTitle, title } = info.snippet;
  const { likeCount, viewCount } = info.statistics;

  return (
    <div className="p-2 m-2 w-72">
      <img src={thumbnails.high.url} />
      <h1 className="font-bold">{title}</h1>
      <h2>{channelTitle}</h2>
      <h3>{likeCount} Likes</h3>
      <h3>{viewCount} Views</h3>
    </div>
  );
};
export default VideoCard;
