import React from "react";

import { Text } from "components";

const WebWebStoriesOpenStories = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_stories.png')" }}
      >
        <div className="h-3 mt-4 overflow-hidden relative w-full">
          <div className="w-full h-full absolute bg-gray_300_6c rounded-[4px]"></div>
          <div
            className="h-full absolute bg-gray_100  rounded-[2px]"
            style={{ width: "1%" }}
          ></div>
        </div>
        <div className="flex flex-col items-center justify-start mb-11 ml-6 md:ml-[0]">
          <Text
            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
            size="txtRobotoBold24WhiteA700"
          >
            {props?.text}
          </Text>
        </div>
      </div>
    </>
  );
};

WebWebStoriesOpenStories.defaultProps = {
  text: "5 tips to be beautiful, use these creams for.......",
};

export default WebWebStoriesOpenStories;
