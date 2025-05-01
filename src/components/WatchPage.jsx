import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full px-2 md:px-4">
      <div className="flex flex-col lg:flex-row w-full gap-4">
        {/* Video Section */}
        <div className="w-full lg:w-[70%] aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Live Chat */}
        <div className="w-full lg:w-[30%] max-h-[500px] overflow-y-auto">
          <LiveChat />
        </div>
      </div>

      {/* Comments */}
      <div className="mt-6">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
