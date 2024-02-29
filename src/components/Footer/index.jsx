import React from "react";

import { Button, Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-[57px] items-center justify-center mb-[29px] mt-[59px] mx-auto w-[84%]">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1200px] w-full">
            <div className="flex flex-col gap-7 items-start justify-start w-auto">
              <Img
                className="h-[52px] md:h-auto object-cover w-[202px] sm:w-full"
                src="images/img_image1.png"
                alt="imageOne"
              />
              <div className="flex flex-col items-start justify-start w-[184px]">
                <div className="flex flex-col gap-4 items-start justify-start w-[96%]">
                  <div className="flex flex-row gap-4 items-center justify-between w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_iwhatsapp_gray_100.svg"
                      alt="iwhatsapp_One"
                    />
                    <Img
                      className="h-8 w-8"
                      src="images/img_ifacebook_gray_100.svg"
                      alt="ifacebook_One"
                    />
                    <Img
                      className="h-8 w-8"
                      src="images/img_itwitter_gray_100.svg"
                      alt="itwitter_One"
                    />
                    <Img
                      className="h-8 w-8"
                      src="images/img_ilinkedin_gray_100.svg"
                      alt="ilinkedin_One"
                    />
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-[46%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_iinstagram_gray_100.svg"
                      alt="iinstagram_One"
                    />
                    <Img
                      className="h-8 w-8"
                      src="images/img_iyoutube_gray_100.svg"
                      alt="iyoutube_One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-cyan-700 sm:text-xl w-auto"
                size="txtRobotoBold24Cyan700"
              >
                Most Searches
              </Text>
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start pb-[3px] pr-[3px]">
                    <Text
                      className="text-gray-100 text-xl"
                      size="txtRobotoRegular20"
                    >
                      City Guides
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start pb-1 pr-1">
                    <Text
                      className="text-gray-100 text-xl"
                      size="txtRobotoRegular20"
                    >
                      Travel
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start pb-1 pr-1">
                    <Text
                      className="text-gray-100 text-xl"
                      size="txtRobotoRegular20"
                    >
                      Tech
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-100 text-xl"
                      size="txtRobotoRegular20"
                    >
                      Money
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start pb-1 pr-1 w-full">
                    <Text
                      className="text-gray-100 text-xl"
                      size="txtRobotoRegular20"
                    >
                      Life Hacks
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-gray-100 text-xl w-full"
                      size="txtRobotoRegular20"
                    >
                      Beauty & Body Care
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start pb-1 pr-1 w-full">
                    <Text
                      className="text-gray-100 text-xl"
                      size="txtRobotoRegular20"
                    >
                      Videos
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start pb-[3px] pr-[3px]">
                    <Text
                      className="text-gray-100 text-xl"
                      size="txtRobotoRegular20"
                    >
                      Life Style
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start pb-1 pr-1 w-full">
                    <Text
                      className="text-gray-100 text-xl"
                      size="txtRobotoRegular20"
                    >
                      Food
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start pb-1 pr-1 w-full">
                    <Text
                      className="text-gray-100 text-xl"
                      size="txtRobotoRegular20"
                    >
                      Entertainment
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start pb-1 pr-1 w-full">
                    <Text
                      className="text-gray-100 text-xl"
                      size="txtRobotoRegular20"
                    >
                      Web Stories
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-cyan-700 sm:text-xl w-auto"
                size="txtRobotoBold24Cyan700"
              >
                Help
              </Text>
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <div className="flex flex-col items-start justify-start pb-1 pr-1">
                  <Text
                    className="text-gray-100 text-xl"
                    size="txtRobotoRegular20"
                  >
                    Advertise
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start pb-1 pr-1">
                  <Text
                    className="text-gray-100 text-xl"
                    size="txtRobotoRegular20"
                  >
                    Contact Us
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start pb-1 pr-1">
                  <Text
                    className="text-gray-100 text-xl"
                    size="txtRobotoRegular20"
                  >
                    About Us
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start pb-1 pr-1">
                  <Text
                    className="text-gray-100 text-xl"
                    size="txtRobotoRegular20"
                  >
                    Work with Us
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start pb-[3px] pr-[3px] w-full">
                  <Text
                    className="text-gray-100 text-xl"
                    size="txtRobotoRegular20"
                  >
                    Privacy Policy
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-cyan-700 sm:text-xl w-auto"
                size="txtRobotoBold24Cyan700"
              >
                Newsletter
              </Text>
              <Text
                className="max-w-[360px] md:max-w-full text-gray-600 text-xl"
                size="txtRobotoRegular20Gray600"
              >
                Subscribe to mailing list to receive daily updates to your
                inbox.
              </Text>
              <div className="bg-gray-100 flex flex-row gap-9 items-start justify-center p-2 rounded-[12px] w-full">
                <div className="flex flex-col h-10 md:h-auto items-center justify-center p-2 w-auto">
                  <Text
                    className="text-gray-600 text-xl w-auto"
                    size="txtRobotoRegular20Gray600"
                  >
                    Your Email Address
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-roboto h-10 leading-[normal] min-w-[105px] rounded-lg text-center text-xl"
                  color="cyan_700"
                  size="xs"
                  variant="fill"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <Text
            className="text-gray-600 text-xl"
            size="txtRobotoRegular20Gray600"
          >
            Copyright @ 2023 Designed & Developed by BnB Infotech Freelancing
            Team, All Rights Reserved
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
