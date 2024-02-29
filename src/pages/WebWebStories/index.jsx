import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, SelectBox, Text } from "components";
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

const WebWebStoriesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto items-start justify-start mx-auto w-full">
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
          className="md:ml-[0] ml-[120px] mt-[33px] text-5xl sm:text-[38px] md:text-[44px] text-cyan-700"
          size="txtRobotoBold48Cyan700"
        >
          Web Stories
        </Text>
        <div className="flex flex-col items-center mt-[25px] w-full">
          <div className="flex flex-col items-start justify-end max-w-[1200px] mx-auto md:px-5 w-full">
            <div className="flex flex-col h-[5356px] md:h-auto items-start justify-start max-w-[1200px] w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle6_540x282.png"
                      alt="rectangleSix"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle7.png"
                      alt="rectangleSeven"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] items-end justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-start mr-[5px] w-60">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="common-pointer h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <div className="absolute flex flex-col md:gap-10 gap-[344px] h-max inset-[0] justify-center m-auto w-[87%]">
                      <Img
                        className="h-8 md:ml-[0] ml-[213px] w-8"
                        src="images/img_iwebstories_gray_100.svg"
                        alt="iwebstories"
                      />
                      <div className="flex flex-col items-center justify-center mr-1.5 w-auto">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                          size="txtRobotoBold32Gray100"
                        >
                          <>
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="h-[280px] relative w-full">
                    <Img
                      className="common-pointer h-[280px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <Img
                      className="absolute h-8 right-[6%] top-[6%] w-8"
                      src="images/img_iwebstories_gray_100.svg"
                      alt="iwebstories"
                    />
                  </div>
                  <div className="h-[280px] relative w-full">
                    <Img
                      className="common-pointer h-[280px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <Img
                      className="absolute h-8 right-[6%] top-[6%] w-8"
                      src="images/img_iwebstories_gray_100.svg"
                      alt="iwebstories"
                    />
                  </div>
                  <div className="h-[280px] relative w-full">
                    <Img
                      className="common-pointer h-[280px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <Img
                      className="absolute h-8 right-[6%] top-[6%] w-8"
                      src="images/img_iwebstories_gray_100.svg"
                      alt="iwebstories"
                    />
                  </div>
                  <div className="h-[280px] relative w-full">
                    <Img
                      className="common-pointer h-[280px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
                      onClick={() => navigate("/webwebstoriesopen")}
                    />
                    <Img
                      className="absolute h-8 right-[6%] top-[6%] w-8"
                      src="images/img_iwebstories_gray_100.svg"
                      alt="iwebstories"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-900 flex items-center justify-center mt-[3px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default WebWebStoriesPage;
