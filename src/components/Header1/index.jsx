import React from "react";

import { Img, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 h-14 md:h-auto items-center justify-between max-w-[1200px] w-full">
          <div className="header-row ">
            <Img
              className="h-[52px] md:h-auto object-cover w-60"
              src="images/img_pnglogo1.png"
              alt="pnglogoOne"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="border border-gray-600 border-solid flex sm:flex-1 flex-row gap-4 sm:hidden items-center justify-between px-4 py-2 rounded-[20px] w-[400px] sm:w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-600 sm:text-xl w-auto"
              size="txtRobotoRegular24"
            >
              Search
            </Text>
            <Img className="h-6 w-6" src="images/img_rewind.svg" alt="rewind" />
          </div>
          <div className="flex flex-row gap-9 sm:hidden items-center justify-start w-auto">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-8 w-8"
                src="images/img_iwhatsapp.svg"
                alt="iwhatsapp"
              />
              <Img
                className="h-8 w-8"
                src="images/img_ifacebook.svg"
                alt="ifacebook"
              />
              <Img
                className="h-8 w-8"
                src="images/img_itwitter.svg"
                alt="itwitter"
              />
              <Img
                className="h-8 w-8"
                src="images/img_ilinkedin.svg"
                alt="ilinkedin"
              />
              <Img
                className="h-8 w-8"
                src="images/img_iinstagram.svg"
                alt="iinstagram"
              />
              <Img
                className="h-8 w-8"
                src="images/img_iyoutube.svg"
                alt="iyoutube"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-9">
              <Img
                className="h-9 w-9"
                src="images/img_iprofile.svg"
                alt="iprofile"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
