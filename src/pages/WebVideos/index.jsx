import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const lifestyleOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const entertainmentOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const techOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const entertainmentOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const videosOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const WebVideosPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto gap-[33px] items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="bg-gray-900 flex flex-col h-12 md:h-auto items-start justify-center max-w-[1440px] md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-row items-start justify-start w-auto">
              <div className="flex flex-col h-9 md:h-auto items-center justify-center p-2 w-auto">
                <Text
                  className="text-gray-100 text-xl w-auto"
                  size="txtRobotoRegular20"
                >
                  Advertise
                </Text>
              </div>
              <div className="flex flex-col h-9 md:h-auto items-center justify-center p-2 w-auto">
                <Text
                  className="text-gray-100 text-xl w-auto"
                  size="txtRobotoRegular20"
                >
                  Work With Us
                </Text>
              </div>
              <div className="flex flex-col h-9 md:h-auto items-center justify-center p-2 w-auto">
                <Text
                  className="text-gray-100 text-xl w-auto"
                  size="txtRobotoRegular20"
                >
                  About Us
                </Text>
              </div>
            </div>
          </div>
          <Header className="flex flex-col gap-4 items-center justify-center px-2 md:px-5 py-4 w-full" />
          <div className="bg-gray-100 flex flex-col items-start justify-start mt-3 p-2 shadow-bs w-full">
            <div className="flex flex-col items-center justify-start ml-28 md:ml-[0] md:px-5 w-[77%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                <Button
                  className="cursor-pointer leading-[normal] min-w-[117px] text-center text-xl"
                  shape="square"
                  color="gray_100"
                  size="xs"
                  variant="fill"
                >
                  City Guides
                </Button>
                <div className="flex relative w-[29%] md:w-full">
                  <div className="flex my-auto w-[85%] sm:w-full">
                    <SelectBox
                      className="h-10 leading-[normal] my-auto text-left text-xl w-[46%] sm:w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 w-6 ml-[undefinedpx] z-[1]"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="lifestyle"
                      options={lifestyleOptionsList}
                      isSearchable={false}
                      placeholder="Life Style"
                      shape="square"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    />
                    <SelectBox
                      className="h-10 leading-[normal] ml-[-22px] my-auto text-left text-xl w-[63%] sm:w-full z-[1]"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 w-6 ml-[undefinedpx] z-[1]"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="entertainment"
                      options={entertainmentOptionsList}
                      isSearchable={false}
                      placeholder="Entertainment"
                      shape="square"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    />
                  </div>
                  <Button
                    className="cursor-pointer h-10 leading-[normal] min-w-[70px] ml-[-22px] my-auto text-center text-xl z-[1]"
                    shape="square"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    Travel
                  </Button>
                </div>
                <Button
                  className="cursor-pointer h-10 leading-[normal] min-w-[61px] text-center text-xl"
                  shape="square"
                  color="gray_100"
                  size="xs"
                  variant="fill"
                >
                  Food
                </Button>
                <div className="flex relative w-[26%] md:w-full">
                  <div className="flex my-auto w-[81%] sm:w-full">
                    <SelectBox
                      className="h-10 leading-[normal] my-auto text-left text-xl w-[37%] sm:w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 w-6 ml-[undefinedpx] z-[1]"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="tech"
                      options={techOptionsList}
                      isSearchable={false}
                      placeholder="Tech"
                      shape="square"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    />
                    <SelectBox
                      className="h-10 leading-[normal] ml-[-22px] my-auto text-left text-xl w-[73%] sm:w-full z-[1]"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 w-6 ml-[undefinedpx] z-[1]"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="entertainment_One"
                      options={entertainmentOneOptionsList}
                      isSearchable={false}
                      placeholder="Entertainment"
                      shape="square"
                      color="gray_100"
                      size="xs"
                      variant="fill"
                    />
                  </div>
                  <Button
                    className="cursor-pointer h-10 leading-[normal] min-w-[76px] ml-[-22px] my-auto text-center text-xl z-[1]"
                    shape="square"
                    color="gray_100"
                    size="xs"
                    variant="fill"
                  >
                    Money
                  </Button>
                </div>
                <Button
                  className="cursor-pointer h-10 leading-[normal] min-w-[75px] text-center text-xl"
                  shape="square"
                  color="gray_100"
                  size="xs"
                  variant="fill"
                >
                  Health
                </Button>
                <Button
                  className="cursor-pointer h-10 leading-[normal] min-w-[123px] text-center text-xl"
                  shape="square"
                  color="gray_100"
                  size="xs"
                  variant="fill"
                >
                  Web Stories
                </Button>
                <SelectBox
                  className="md:flex-1 h-10 leading-[normal] text-left text-xl w-[10%] md:w-full"
                  placeholderClassName="text-gray-900"
                  indicator={
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="videos"
                  options={videosOptionsList}
                  isSearchable={false}
                  placeholder="Videos"
                  shape="square"
                  color="gray_100"
                  size="xs"
                  variant="fill"
                />
              </div>
            </div>
          </div>
        </div>
        <Text
          className="md:ml-[0] ml-[120px] text-5xl sm:text-[38px] md:text-[44px] text-gray-900"
          size="txtRobotoBold48Gray900"
        >
          Videos
        </Text>
        <div className="flex flex-col items-center w-full">
          <div className="flex md:flex-col flex-row gap-[22px] items-start justify-start max-w-[1200px] mx-auto md:px-5 w-full">
            <Img
              className="md:flex-1 h-[516px] sm:h-auto object-cover w-[896px] md:w-full"
              src="images/img_rectangle16.png"
              alt="rectangleSixteen"
            />
            <Text
              className="max-w-[282px] md:max-w-full text-black-900 text-xl"
              size="txtRobotoRegular20Black900"
            >
              <>
                MAD is an upcoming telugu film starring in lead roles. Directed
                by Kalyan Shankar & Produced by Haarika Suryadevara & Sai
                Soujanya under Sithara Entertainments & Fortune Four Cinemas.
                Presented by S. Naga Vamsi and Music composed by Bheems
                Ceciroleo. <br />
                <br />
              </>
            </Text>
          </div>
          <div className="flex flex-col gap-9 items-start justify-start max-w-[1200px] mt-10 mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-4 items-start justify-start max-w-[1200px] w-full">
              <div className="flex flex-row md:gap-10 h-10 md:h-auto items-center justify-between max-w-[1200px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                  size="txtRobotoBold32"
                >
                  Trending
                </Text>
                <Text
                  className="bg-gray-100 h-9 justify-center px-4 py-[3px] rounded-[16px] text-2xl md:text-[22px] text-cyan-700 text-shadow-ts sm:text-xl w-auto"
                  size="txtRobotoRegular24Cyan700"
                >
                  <>Explore More &gt;</>
                </Text>
              </div>
              <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start max-w-[1200px] py-2 w-full">
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_200x352.png"
                    alt="rectangleSix"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_200x352.png"
                    alt="rectangleSix_One"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen_One"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_200x352.png"
                    alt="rectangleSix_Two"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen_Two"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start max-w-[1200px] w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 h-10 md:h-auto items-center justify-between max-w-[1200px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                  size="txtRobotoBold32"
                >
                  Latest for you
                </Text>
                <Text
                  className="bg-gray-100 h-9 justify-center px-4 py-[3px] rounded-[16px] text-2xl md:text-[22px] text-cyan-700 text-shadow-ts sm:text-xl w-auto"
                  size="txtRobotoRegular24Cyan700"
                >
                  <>Explore More &gt;</>
                </Text>
              </div>
              <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start max-w-[1200px] py-2 w-full">
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_200x352.png"
                    alt="rectangleSix_Three"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen_Three"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_200x352.png"
                    alt="rectangleSix_Four"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen_Four"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_200x352.png"
                    alt="rectangleSix_Five"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen_Five"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start max-w-[1200px] w-full">
              <div className="flex flex-row md:gap-10 h-10 md:h-auto items-center justify-between max-w-[1200px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                  size="txtRobotoBold32"
                >
                  Travel
                </Text>
                <Text
                  className="bg-gray-100 h-9 justify-center px-4 py-[3px] rounded-[16px] text-2xl md:text-[22px] text-cyan-700 text-shadow-ts sm:text-xl w-auto"
                  size="txtRobotoRegular24Cyan700"
                >
                  <>Explore More &gt;</>
                </Text>
              </div>
              <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start max-w-[1200px] py-2 w-full">
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_200x352.png"
                    alt="rectangleSix_Six"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen_Six"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_200x352.png"
                    alt="rectangleSix_Seven"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen_Seven"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_200x352.png"
                    alt="rectangleSix_Eight"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen_Eight"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start max-w-[1200px] w-full">
              <div className="flex flex-row md:gap-10 h-10 md:h-auto items-center justify-between max-w-[1200px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                  size="txtRobotoBold32"
                >
                  Food
                </Text>
                <Text
                  className="bg-gray-100 h-9 justify-center px-4 py-[3px] rounded-[16px] text-2xl md:text-[22px] text-cyan-700 text-shadow-ts sm:text-xl w-auto"
                  size="txtRobotoRegular24Cyan700"
                >
                  <>Explore More &gt;</>
                </Text>
              </div>
              <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start max-w-[1200px] py-2 w-full">
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_544x384.png"
                    alt="rectangleSix_Nine"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen_Nine"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_544x384.png"
                    alt="rectangleSix_Ten"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen_Ten"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_544x384.png"
                    alt="rectangleSix_Eleven"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen_Eleven"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start max-w-[1200px] w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 h-10 md:h-auto items-center justify-between max-w-[1200px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                  size="txtRobotoBold32"
                >
                  Entertainment
                </Text>
                <Text
                  className="bg-gray-100 h-9 justify-center px-4 py-[3px] rounded-[16px] text-2xl md:text-[22px] text-cyan-700 text-shadow-ts sm:text-xl w-auto"
                  size="txtRobotoRegular24Cyan700"
                >
                  <>Explore More &gt;</>
                </Text>
              </div>
              <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start max-w-[1200px] py-2 w-full">
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_1.png"
                    alt="rectangleSix_Twelve"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen_Twelve"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_1.png"
                    alt="rectangleSix_Thirteen"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen_Thirteen"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_1.png"
                    alt="rectangleSix_Fourteen"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen_Fourteen"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start max-w-[1200px] w-full">
              <div className="flex flex-row md:gap-10 h-10 md:h-auto items-center justify-between max-w-[1200px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                  size="txtRobotoBold32"
                >
                  Tech
                </Text>
                <Text
                  className="bg-gray-100 h-9 justify-center px-4 py-[3px] rounded-[16px] text-2xl md:text-[22px] text-cyan-700 text-shadow-ts sm:text-xl w-auto"
                  size="txtRobotoRegular24Cyan700"
                >
                  <>Explore More &gt;</>
                </Text>
              </div>
              <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start max-w-[1200px] py-2 w-full">
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_2.png"
                    alt="rectangleSix_Fifteen"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen_Fifteen"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_2.png"
                    alt="rectangleSix_Sixteen"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen_Sixteen"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                  <Img
                    className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle6_2.png"
                    alt="rectangleSix_Seventeen"
                  />
                  <div className="flex flex-col gap-2 items-start justify-center w-full">
                    <Text
                      className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                      size="txtRobotoBold20"
                    >
                      Top 1 tool for all the designers must have | Best tool
                    </Text>
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtRobotoRegular16"
                    >
                      Rajashekar Videos
                    </Text>
                    <Input
                      name="frameFourteen_Seventeen"
                      placeholder="4.8K"
                      className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                      wrapClassName="flex w-[17%]"
                      prefix={
                        <Img
                          className="h-4 mr-2 my-px"
                          src="images/img_pheyebold.svg"
                          alt="ph:eye-bold"
                        />
                      }
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start max-w-[1200px] w-full">
              <div className="flex flex-col h-10 md:h-auto items-center justify-start max-w-[1200px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                  size="txtRobotoBold32"
                >
                  More on Videos
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start max-w-[1200px] py-2 w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_2.png"
                        alt="rectangleSix_Eighteen"
                      />
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <Text
                          className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                          size="txtRobotoBold20"
                        >
                          Top 1 tool for all the designers must have | Best tool
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Rajashekar Videos
                        </Text>
                        <Input
                          name="frameFourteen_Eighteen"
                          placeholder="4.8K"
                          className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                          wrapClassName="flex w-[17%]"
                          prefix={
                            <Img
                              className="h-4 mr-2 my-px"
                              src="images/img_pheyebold.svg"
                              alt="ph:eye-bold"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_2.png"
                        alt="rectangleSix_Nineteen"
                      />
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <Text
                          className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                          size="txtRobotoBold20"
                        >
                          Top 1 tool for all the designers must have | Best tool
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Rajashekar Videos
                        </Text>
                        <Input
                          name="frameFourteen_Nineteen"
                          placeholder="4.8K"
                          className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                          wrapClassName="flex w-[17%]"
                          prefix={
                            <Img
                              className="h-4 mr-2 my-px"
                              src="images/img_pheyebold.svg"
                              alt="ph:eye-bold"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_2.png"
                        alt="rectangleSix_Twenty"
                      />
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <Text
                          className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                          size="txtRobotoBold20"
                        >
                          Top 1 tool for all the designers must have | Best tool
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Rajashekar Videos
                        </Text>
                        <Input
                          name="frameFourteen_Twenty"
                          placeholder="4.8K"
                          className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                          wrapClassName="flex w-[17%]"
                          prefix={
                            <Img
                              className="h-4 mr-2 my-px"
                              src="images/img_pheyebold.svg"
                              alt="ph:eye-bold"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_2.png"
                        alt="rectangleSix_TwentyOne"
                      />
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <Text
                          className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                          size="txtRobotoBold20"
                        >
                          Top 1 tool for all the designers must have | Best tool
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Rajashekar Videos
                        </Text>
                        <Input
                          name="frameFourteen_TwentyOne"
                          placeholder="4.8K"
                          className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                          wrapClassName="flex w-[17%]"
                          prefix={
                            <Img
                              className="h-4 mr-2 my-px"
                              src="images/img_pheyebold.svg"
                              alt="ph:eye-bold"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_2.png"
                        alt="rectangleSix_TwentyTwo"
                      />
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <Text
                          className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                          size="txtRobotoBold20"
                        >
                          Top 1 tool for all the designers must have | Best tool
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Rajashekar Videos
                        </Text>
                        <Input
                          name="frameFourteen_TwentyTwo"
                          placeholder="4.8K"
                          className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                          wrapClassName="flex w-[17%]"
                          prefix={
                            <Img
                              className="h-4 mr-2 my-px"
                              src="images/img_pheyebold.svg"
                              alt="ph:eye-bold"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_2.png"
                        alt="rectangleSix_TwentyThree"
                      />
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <Text
                          className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                          size="txtRobotoBold20"
                        >
                          Top 1 tool for all the designers must have | Best tool
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Rajashekar Videos
                        </Text>
                        <Input
                          name="frameFourteen_TwentyThree"
                          placeholder="4.8K"
                          className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                          wrapClassName="flex w-[17%]"
                          prefix={
                            <Img
                              className="h-4 mr-2 my-px"
                              src="images/img_pheyebold.svg"
                              alt="ph:eye-bold"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_2.png"
                        alt="rectangleSix_TwentyFour"
                      />
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <Text
                          className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                          size="txtRobotoBold20"
                        >
                          Top 1 tool for all the designers must have | Best tool
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Rajashekar Videos
                        </Text>
                        <Input
                          name="frameFourteen_TwentyFour"
                          placeholder="4.8K"
                          className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                          wrapClassName="flex w-[17%]"
                          prefix={
                            <Img
                              className="h-4 mr-2 my-px"
                              src="images/img_pheyebold.svg"
                              alt="ph:eye-bold"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_2.png"
                        alt="rectangleSix_TwentyFive"
                      />
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <Text
                          className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                          size="txtRobotoBold20"
                        >
                          Top 1 tool for all the designers must have | Best tool
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Rajashekar Videos
                        </Text>
                        <Input
                          name="frameFourteen_TwentyFive"
                          placeholder="4.8K"
                          className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                          wrapClassName="flex w-[17%]"
                          prefix={
                            <Img
                              className="h-4 mr-2 my-px"
                              src="images/img_pheyebold.svg"
                              alt="ph:eye-bold"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_2.png"
                        alt="rectangleSix_TwentySix"
                      />
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <Text
                          className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                          size="txtRobotoBold20"
                        >
                          Top 1 tool for all the designers must have | Best tool
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Rajashekar Videos
                        </Text>
                        <Input
                          name="frameFourteen_TwentySix"
                          placeholder="4.8K"
                          className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                          wrapClassName="flex w-[17%]"
                          prefix={
                            <Img
                              className="h-4 mr-2 my-px"
                              src="images/img_pheyebold.svg"
                              alt="ph:eye-bold"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_2.png"
                        alt="rectangleSix_TwentySeven"
                      />
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <Text
                          className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                          size="txtRobotoBold20"
                        >
                          Top 1 tool for all the designers must have | Best tool
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Rajashekar Videos
                        </Text>
                        <Input
                          name="frameFourteen_TwentySeven"
                          placeholder="4.8K"
                          className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                          wrapClassName="flex w-[17%]"
                          prefix={
                            <Img
                              className="h-4 mr-2 my-px"
                              src="images/img_pheyebold.svg"
                              alt="ph:eye-bold"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_2.png"
                        alt="rectangleSix_TwentyEight"
                      />
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <Text
                          className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                          size="txtRobotoBold20"
                        >
                          Top 1 tool for all the designers must have | Best tool
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Rajashekar Videos
                        </Text>
                        <Input
                          name="frameFourteen_TwentyEight"
                          placeholder="4.8K"
                          className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                          wrapClassName="flex w-[17%]"
                          prefix={
                            <Img
                              className="h-4 mr-2 my-px"
                              src="images/img_pheyebold.svg"
                              alt="ph:eye-bold"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_2.png"
                        alt="rectangleSix_TwentyNine"
                      />
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <Text
                          className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                          size="txtRobotoBold20"
                        >
                          Top 1 tool for all the designers must have | Best tool
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Rajashekar Videos
                        </Text>
                        <Input
                          name="frameFourteen_TwentyNine"
                          placeholder="4.8K"
                          className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                          wrapClassName="flex w-[17%]"
                          prefix={
                            <Img
                              className="h-4 mr-2 my-px"
                              src="images/img_pheyebold.svg"
                              alt="ph:eye-bold"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_2.png"
                        alt="rectangleSix_Thirty"
                      />
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <Text
                          className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                          size="txtRobotoBold20"
                        >
                          Top 1 tool for all the designers must have | Best tool
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Rajashekar Videos
                        </Text>
                        <Input
                          name="frameFourteen_Thirty"
                          placeholder="4.8K"
                          className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                          wrapClassName="flex w-[17%]"
                          prefix={
                            <Img
                              className="h-4 mr-2 my-px"
                              src="images/img_pheyebold.svg"
                              alt="ph:eye-bold"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_2.png"
                        alt="rectangleSix_ThirtyOne"
                      />
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <Text
                          className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                          size="txtRobotoBold20"
                        >
                          Top 1 tool for all the designers must have | Best tool
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Rajashekar Videos
                        </Text>
                        <Input
                          name="frameFourteen_ThirtyOne"
                          placeholder="4.8K"
                          className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                          wrapClassName="flex w-[17%]"
                          prefix={
                            <Img
                              className="h-4 mr-2 my-px"
                              src="images/img_pheyebold.svg"
                              alt="ph:eye-bold"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_2.png"
                        alt="rectangleSix_ThirtyTwo"
                      />
                      <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <Text
                          className="max-w-[352px] md:max-w-full text-gray-900 text-xl"
                          size="txtRobotoBold20"
                        >
                          Top 1 tool for all the designers must have | Best tool
                        </Text>
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          Rajashekar Videos
                        </Text>
                        <Input
                          name="frameFourteen_ThirtyTwo"
                          placeholder="4.8K"
                          className="leading-[normal] p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                          wrapClassName="flex w-[17%]"
                          prefix={
                            <Img
                              className="h-4 mr-2 my-px"
                              src="images/img_pheyebold.svg"
                              alt="ph:eye-bold"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-900 flex items-center justify-center mt-[151px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default WebVideosPage;
