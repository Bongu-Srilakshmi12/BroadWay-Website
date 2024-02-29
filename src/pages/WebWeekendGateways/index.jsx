import React from "react";

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

const WebWeekendGatewaysPage = () => {
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
        <div className="flex md:flex-col flex-row gap-4 items-center justify-start md:ml-[0] ml-[120px] mt-8 md:px-5 w-auto md:w-full">
          <Text
            className="text-2xl md:text-[22px] text-gray-600 sm:text-xl w-auto"
            size="txtRobotoBold24Gray600"
          >
            Choose City:
          </Text>
          <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-auto md:w-full">
            <Button
              className="border border-gray-300 border-solid cursor-pointer h-9 leading-[normal] min-w-[129px] text-center text-xl"
              shape="round"
              color="cyan_700"
              size="xs"
              variant="fill"
            >
              Hyderabad
            </Button>
            <Button
              className="border border-gray-600 border-solid cursor-pointer h-9 leading-[normal] min-w-[106px] text-center text-xl"
              shape="round"
              color="gray_100"
              size="xs"
              variant="fill"
            >
              Mumbai
            </Button>
            <Button
              className="border border-gray-600 border-solid cursor-pointer h-9 leading-[normal] min-w-[105px] text-center text-xl"
              shape="round"
              color="gray_100"
              size="xs"
              variant="fill"
            >
              Chennai
            </Button>
            <Button
              className="border border-gray-600 border-solid cursor-pointer h-9 leading-[normal] min-w-[100px] text-center text-xl"
              shape="round"
              color="gray_100"
              size="xs"
              variant="fill"
            >
              Kolkota
            </Button>
            <Button
              className="border border-gray-600 border-solid cursor-pointer h-9 leading-[normal] min-w-[77px] text-center text-xl"
              shape="round"
              color="gray_100"
              size="xs"
              variant="fill"
            >
              Delhi
            </Button>
            <Button
              className="border border-gray-600 border-solid cursor-pointer h-9 leading-[normal] min-w-[83px] text-center text-xl"
              shape="round"
              color="gray_100"
              size="xs"
              variant="fill"
            >
              Kochi
            </Button>
          </div>
        </div>
        <Text
          className="md:ml-[0] ml-[120px] mt-[34px] text-5xl sm:text-[38px] md:text-[44px] text-gray-900"
          size="txtRobotoBold48Gray900"
        >
          Weekend Gateways in Hyderabad
        </Text>
        <div className="flex flex-col items-center mt-3 w-full">
          <Text
            className="text-gray-600 text-xl w-[84%] sm:w-full"
            size="txtRobotoRegular20Gray600"
          >
            Discover a complete guide to where to shop, best places to eat, top
            bars & nightlife, things to do, top places to see, and best tourist
            attractions in Delhi, Gurgaon & Noida. Find curated reviews &
            recommendations
          </Text>
          <div className="flex flex-col gap-10 items-start justify-start max-w-[1200px] mt-[39px] mx-auto md:px-5 w-full">
            <List
              className="flex flex-col gap-10 items-center w-full"
              orientation="vertical"
            >
              <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 h-10 md:h-auto items-center justify-between max-w-[1200px] w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                    size="txtRobotoBold32"
                  >
                    <span className="text-cyan-700 font-roboto font-bold">
                      Tourist Attractions{" "}
                    </span>
                    <span className="text-gray-900 font-roboto font-bold">
                      in Hyderabad
                    </span>
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
                      className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle6_544x384.png"
                      alt="rectangleSix"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                        size="txtRobotoBold24"
                      >
                        26 Best Restaurants in city that will never disappoint
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_save.svg"
                        alt="save"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                    <Img
                      className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle6_544x384.png"
                      alt="rectangleSix_One"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                        size="txtRobotoBold24"
                      >
                        26 Best Restaurants in city that will never disappoint
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_pheyebold.svg"
                        alt="pheyebold_One"
                      />
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtRobotoRegular20Gray900"
                      >
                        1.8K
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                    <Img
                      className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle6_544x384.png"
                      alt="rectangleSix_Two"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                        size="txtRobotoBold24"
                      >
                        26 Best Restaurants in city that will never disappoint
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_pheyebold.svg"
                        alt="pheyebold_Two"
                      />
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtRobotoRegular20Gray900"
                      >
                        1.8K
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 h-10 md:h-auto items-center justify-between max-w-[1200px] w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                    size="txtRobotoBold32"
                  >
                    <span className="text-cyan-700 font-roboto font-bold">
                      Hidden Gems{" "}
                    </span>
                    <span className="text-gray-900 font-roboto font-bold">
                      in Hyderabad
                    </span>
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
                      className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle6_544x384.png"
                      alt="rectangleSix"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                        size="txtRobotoBold24"
                      >
                        26 Best Restaurants in city that will never disappoint
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_save.svg"
                        alt="save"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                    <Img
                      className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle6_544x384.png"
                      alt="rectangleSix_One"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                        size="txtRobotoBold24"
                      >
                        26 Best Restaurants in city that will never disappoint
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_pheyebold.svg"
                        alt="pheyebold_One"
                      />
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtRobotoRegular20Gray900"
                      >
                        1.8K
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                    <Img
                      className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle6_544x384.png"
                      alt="rectangleSix_Two"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                        size="txtRobotoBold24"
                      >
                        26 Best Restaurants in city that will never disappoint
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_pheyebold.svg"
                        alt="pheyebold_Two"
                      />
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtRobotoRegular20Gray900"
                      >
                        1.8K
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 h-10 md:h-auto items-center justify-between max-w-[1200px] w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                    size="txtRobotoBold32"
                  >
                    <span className="text-cyan-700 font-roboto font-bold">
                      Farm stays & Resorts{" "}
                    </span>
                    <span className="text-gray-900 font-roboto font-bold">
                      in Hyderabad
                    </span>
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
                      className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle6_544x384.png"
                      alt="rectangleSix"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                        size="txtRobotoBold24"
                      >
                        26 Best Restaurants in city that will never disappoint
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_save.svg"
                        alt="save"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                    <Img
                      className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle6_544x384.png"
                      alt="rectangleSix_One"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                        size="txtRobotoBold24"
                      >
                        26 Best Restaurants in city that will never disappoint
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_pheyebold.svg"
                        alt="pheyebold_One"
                      />
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtRobotoRegular20Gray900"
                      >
                        1.8K
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                    <Img
                      className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle6_544x384.png"
                      alt="rectangleSix_Two"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                        size="txtRobotoBold24"
                      >
                        26 Best Restaurants in city that will never disappoint
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_pheyebold.svg"
                        alt="pheyebold_Two"
                      />
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtRobotoRegular20Gray900"
                      >
                        1.8K
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col h-10 md:h-auto items-center justify-start max-w-[1200px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                  size="txtRobotoBold32"
                >
                  <span className="text-cyan-700 font-roboto font-bold">
                    More in
                  </span>
                  <span className="text-gray-900 font-roboto font-bold">
                    {" "}
                    Weekend Gateways
                  </span>
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start max-w-[1200px] py-2 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-center justify-between w-full">
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Img
                            className="h-6 w-6"
                            src="images/img_pheyebold.svg"
                            alt="pheyebold"
                          />
                          <Text
                            className="text-gray-900 text-xl w-auto"
                            size="txtRobotoRegular20Gray900"
                          >
                            1.8K
                          </Text>
                        </div>
                        <Img
                          className="h-6 w-6"
                          src="images/img_save.svg"
                          alt="save"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray-100 border border-gray-300 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-[264px] sm:h-auto object-cover rounded-[16px] w-full"
                        src="images/img_rectangle6_544x384.png"
                        alt="rectangleSix"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          26 Best Restaurants in city that will never disappoint
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_pheyebold.svg"
                          alt="pheyebold"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-900 flex items-center justify-center mt-[121px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default WebWeekendGatewaysPage;
