import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

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

const WebFoodArticlePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
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
          <Header1 className="flex flex-col gap-4 items-center justify-center px-2 md:px-5 py-4 w-full" />
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
          <div className="flex md:flex-col flex-row gap-4 items-start justify-start md:ml-[0] ml-[120px] mt-8 md:px-5 w-auto md:w-full">
            <Button
              className="border border-gray-600 border-solid cursor-pointer h-9 leading-[normal] min-w-[167px] text-center text-xl"
              shape="round"
              color="gray_100"
              size="xs"
              variant="fill"
            >
              Similar Articles
            </Button>
            <Button
              className="border border-gray-600 border-solid cursor-pointer h-9 leading-[normal] min-w-[207px] text-center text-xl"
              shape="round"
              color="gray_100"
              size="xs"
              variant="fill"
            >
              Food & Restaurants
            </Button>
            <Button
              className="border border-gray-600 border-solid cursor-pointer h-9 leading-[normal] min-w-[188px] text-center text-xl"
              shape="round"
              color="gray_100"
              size="xs"
              variant="fill"
            >
              Desserts & Bakes
            </Button>
            <Button
              className="border border-gray-600 border-solid cursor-pointer h-9 leading-[normal] min-w-[177px] text-center text-xl"
              shape="round"
              color="gray_100"
              size="xs"
              variant="fill"
            >
              Broadway Guide
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1200px] mt-10 mx-auto md:px-5 w-full">
            <div className="flex flex-1 flex-col gap-4 items-center justify-start max-w-[900px] px-4 w-full">
              <div className="flex flex-col gap-8 items-center justify-start p-4 w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <Text
                    className="max-w-[836px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                    size="txtRobotoBold48Black900"
                  >
                    ‘Tis The Season: 20 Best Christmas Movies To Watch This Year
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-end w-full">
                    <div className="bg-gray-900 flex flex-row gap-2 items-center justify-start px-2 rounded-lg w-auto">
                      <Img
                        className="h-8 w-8"
                        src="images/img_send.svg"
                        alt="send"
                      />
                      <div className="flex flex-col h-10 md:h-auto items-center justify-center p-2 w-auto">
                        <Text
                          className="text-gray-100 text-xl w-auto"
                          size="txtRobotoRegular20"
                        >
                          Share
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-10 w-10"
                      src="images/img_bookmark.svg"
                      alt="bookmark"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-auto md:w-full">
                  <Img
                    className="h-[720px] sm:h-auto object-cover w-[720px] md:w-full"
                    src="images/img_rectangle12.png"
                    alt="rectangleTwelve"
                  />
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-center p-2 w-auto">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                          size="txtRobotoBold24"
                        >
                          Restaurant in Hyderabad
                        </Text>
                      </div>
                      <div className="flex flex-col h-10 md:h-auto items-center justify-center p-2 w-auto">
                        <Text
                          className="text-cyan-700 text-xl w-auto"
                          size="txtRobotoBold20Cyan700"
                        >
                          See on Map
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[158px] rounded-[16px] text-center text-xl"
                      shape="round"
                      color="cyan_700"
                      size="xs"
                      variant="fill"
                    >
                      +1876543987
                    </Button>
                  </div>
                </div>
                <Text
                  className="max-w-[836px] md:max-w-full text-black-900 text-xl"
                  size="txtRobotoRegular20Black900"
                >
                  <>
                    A classic haunt for anyone with a sweet tooth, this classic
                    Bangalore bakery makes the list for their famous plum cake
                    (they&#39;re literally doing a countdown for their plum
                    cakes right now, and we&#39;re happy to tell you that
                    it&#39;s going to be available from tomorrow). Always soft
                    and crumbly in all the right ways, you can expect a rich and
                    oh-so-flavourful plum cake that doesn’t skimp on the
                    fillings. Thom’s is also very pocket-friendly, so this might
                    just be your go-to gift this season for your family, friends
                    and coworkers! Keep an eye out for their Christmas edition
                    sold by the kilo and topped with marzipan frosting. Be merry
                    this Christmas with delicious goodies from Thom&#39;s. And
                    also their snacks — kalkals, rose cookies, tea cakes, and so
                    many others.
                  </>
                </Text>
                <Text
                  className="max-w-[836px] md:max-w-full text-black-900 text-xl"
                  size="txtRobotoRegular20Black900"
                >
                  <>
                    A classic haunt for anyone with a sweet tooth, this classic
                    Bangalore bakery makes the list for their famous plum cake
                    (they&#39;re literally doing a countdown for their plum
                    cakes right now, and we&#39;re happy to tell you that
                    it&#39;s going to be available from tomorrow). Always soft
                    and crumbly in all the right ways, you can expect a rich and
                    oh-so-flavourful plum cake that doesn’t skimp on the
                    fillings. Thom’s is also very pocket-friendly, so this might
                    just be your go-to gift this season for your family, friends
                    and coworkers! Keep an eye out for their Christmas edition
                    sold by the kilo and topped with marzipan frosting. Be merry
                    this Christmas with delicious goodies from Thom&#39;s. And
                    also their snacks — kalkals, rose cookies, tea cakes, and so
                    many others.
                  </>
                </Text>
                <div className="flex flex-col items-center justify-start w-auto md:w-full">
                  <Img
                    className="h-[720px] sm:h-auto object-cover w-[720px] md:w-full"
                    src="images/img_rectangle13.png"
                    alt="rectangleThirteen"
                  />
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-center p-2 w-auto">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                          size="txtRobotoBold24"
                        >
                          Restaurant in Hyderabad
                        </Text>
                      </div>
                      <div className="flex flex-col h-10 md:h-auto items-center justify-center p-2 w-auto">
                        <Text
                          className="text-cyan-700 text-xl w-auto"
                          size="txtRobotoBold20Cyan700"
                        >
                          See on Map
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[113px] rounded-[16px] text-center text-xl"
                      shape="round"
                      color="cyan_700"
                      size="xs"
                      variant="fill"
                    >
                      Visit Site
                    </Button>
                  </div>
                </div>
                <Text
                  className="max-w-[836px] md:max-w-full text-black-900 text-xl"
                  size="txtRobotoRegular20Black900"
                >
                  <>
                    A classic haunt for anyone with a sweet tooth, this classic
                    Bangalore bakery makes the list for their famous plum cake
                    (they&#39;re literally doing a countdown for their plum
                    cakes right now, and we&#39;re happy to tell you that
                    it&#39;s going to be available from tomorrow). Always soft
                    and crumbly in all the right ways, you can expect a rich and
                    oh-so-flavourful plum cake that doesn’t skimp on the
                    fillings. Thom’s is also very pocket-friendly, so this might
                    just be your go-to gift this season for your family, friends
                    and coworkers! Keep an eye out for their Christmas edition
                    sold by the kilo and topped with marzipan frosting. Be merry
                    this Christmas with delicious goodies from Thom&#39;s. And
                    also their snacks — kalkals, rose cookies, tea cakes, and so
                    many others.
                  </>
                </Text>
                <Text
                  className="max-w-[836px] md:max-w-full text-black-900 text-xl"
                  size="txtRobotoRegular20Black900"
                >
                  <>
                    A classic haunt for anyone with a sweet tooth, this classic
                    Bangalore bakery makes the list for their famous plum cake
                    (they&#39;re literally doing a countdown for their plum
                    cakes right now, and we&#39;re happy to tell you that
                    it&#39;s going to be available from tomorrow). Always soft
                    and crumbly in all the right ways, you can expect a rich and
                    oh-so-flavourful plum cake that doesn’t skimp on the
                    fillings. Thom’s is also very pocket-friendly, so this might
                    just be your go-to gift this season for your family, friends
                    and coworkers! Keep an eye out for their Christmas edition
                    sold by the kilo and topped with marzipan frosting. Be merry
                    this Christmas with delicious goodies from Thom&#39;s. And
                    also their snacks — kalkals, rose cookies, tea cakes, and so
                    many others.
                  </>
                </Text>
                <Text
                  className="max-w-[836px] md:max-w-full text-black-900 text-xl"
                  size="txtRobotoRegular20Black900"
                >
                  <>
                    A classic haunt for anyone with a sweet tooth, this classic
                    Bangalore bakery makes the list for their famous plum cake
                    (they&#39;re literally doing a countdown for their plum
                    cakes right now, and we&#39;re happy to tell you that
                    it&#39;s going to be available from tomorrow). Always soft
                    and crumbly in all the right ways, you can expect a rich and
                    oh-so-flavourful plum cake that doesn’t skimp on the
                    fillings. Thom’s is also very pocket-friendly, so this might
                    just be your go-to gift this season for your family, friends
                    and coworkers! Keep an eye out for their Christmas edition
                    sold by the kilo and topped with marzipan frosting. Be merry
                    this Christmas with delicious goodies from Thom&#39;s. And
                    also their snacks — kalkals, rose cookies, tea cakes, and so
                    many others.
                  </>
                </Text>
              </div>
              <Input
                name="language"
                placeholder="Leave  a Comment"
                className="leading-[normal] p-0 placeholder:text-gray-600 text-left text-xl w-full"
                wrapClassName="border border-gray-300 border-solid flex w-full"
                suffix={
                  <Img
                    className="h-8 ml-[35px] my-auto"
                    src="images/img_carbonsendfilled.svg"
                    alt="carbon:send-filled"
                  />
                }
                shape="round"
                color="gray_100"
                size="xs"
                variant="fill"
              ></Input>
              <div className="border border-gray-300 border-solid flex flex-col gap-2 items-center justify-start p-4 rounded-[16px] w-full">
                <div className="flex flex-col md:gap-10 gap-[102px] h-20 md:h-auto items-start justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                    size="txtRobotoBold24"
                  >
                    Mutton Dum Zafrani Biryani{" "}
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-start justify-start px-4 w-auto sm:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_iserve.svg"
                          alt="iserve"
                        />
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Text
                            className="text-base text-gray-600 w-auto"
                            size="txtRobotoRegular16Gray600"
                          >
                            Serves:
                          </Text>
                          <Text
                            className="text-base text-gray-600 w-auto"
                            size="txtRobotoRegular16Gray600"
                          >
                            2
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_itime.svg"
                          alt="itime"
                        />
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Text
                            className="text-base text-gray-600 w-auto"
                            size="txtRobotoRegular16Gray600"
                          >
                            Cooking time:
                          </Text>
                          <Text
                            className="text-base text-gray-600 w-auto"
                            size="txtRobotoRegular16Gray600"
                          >
                            30 mins
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_istar.svg"
                          alt="istar"
                        />
                        <div className="flex flex-row gap-1 items-center justify-start w-auto">
                          <Text
                            className="text-base text-gray-600 w-auto"
                            size="txtRobotoRegular16Gray600"
                          >
                            Effort:
                          </Text>
                          <Text
                            className="text-base text-gray-600 w-auto"
                            size="txtRobotoRegular16Gray600"
                          >
                            Less
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[182px] rounded-lg"
                      leftIcon={
                        <Img
                          className="h-6 mb-px mr-4"
                          src="images/img_i_printer.svg"
                          alt="i -Printer"
                        />
                      }
                      color="gray_600"
                      size="xs"
                      variant="outline"
                    >
                      <div className="font-bold leading-[normal] text-left text-xl">
                        Print Recipe
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-300 border-solid flex flex-col gap-4 items-start justify-start sm:px-5 px-6 py-4 rounded-[16px] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                    size="txtRobotoBold24"
                  >
                    Ingredients
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="bg-gray-300 h-8 justify-center sm:pr-5 pr-[35px] py-[3px] text-gray-900 text-xl w-full"
                      size="txtRobotoRegular20Gray900"
                    >
                      4 cooked lobsters
                    </Text>
                    <div className="flex flex-col h-8 md:h-auto items-center justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtRobotoRegular20Gray900"
                      >
                        1/2 Mayonnaise{" "}
                      </Text>
                    </div>
                    <Text
                      className="bg-gray-300 h-8 justify-center pb-0.5 sm:pr-5 pr-[35px] pt-[5px] text-gray-900 text-xl w-full"
                      size="txtRobotoRegular20Gray900"
                    >
                      2 inner celery stals
                    </Text>
                    <div className="flex flex-col h-8 md:h-auto items-center justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtRobotoRegular20Gray900"
                      >
                        Salt and freshly grounded black pepper
                      </Text>
                    </div>
                    <Text
                      className="bg-gray-300 h-8 justify-center pb-0.5 sm:pr-5 pr-[35px] pt-[5px] text-gray-900 text-xl w-full"
                      size="txtRobotoRegular20Gray900"
                    >
                      4 Rolls, split & lightly toasted
                    </Text>
                    <div className="flex flex-col h-8 md:h-auto items-center justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtRobotoRegular20Gray900"
                      >
                        2 Table spoons chopped fresh parsley leaves
                      </Text>
                    </div>
                    <Text
                      className="bg-gray-300 h-8 justify-center pb-0.5 sm:pr-5 pr-[35px] pt-[5px] text-gray-900 text-xl w-full"
                      size="txtRobotoRegular20Gray900"
                    >
                      4 chopped potatoes
                    </Text>
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 border-solid flex flex-col gap-2 items-start justify-start p-4 rounded-[16px] w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                  size="txtRobotoBold24"
                >
                  You may also like
                </Text>
                <div className="flex flex-col items-start justify-start px-2 w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="gap-4 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                      <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-1 flex-row gap-3 items-center justify-center p-4 w-full">
                        <Img
                          className="h-[72px] md:h-auto object-cover rounded-[16px] w-[72px]"
                          src="images/img_rectangle3.png"
                          alt="rectangleThree"
                        />
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="text-gray-900 text-xl w-full"
                              size="txtRobotoBold20"
                            >
                              A Peak into Earth Home mysteries by Pavan
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                              <Img
                                className="h-6 md:h-auto rounded-[50%] w-6"
                                src="images/img_ellipse2_24x24.png"
                                alt="ellipseTwo"
                              />
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                John Barker
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_pheyebold.svg"
                                alt="pheyebold"
                              />
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                1.8K
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-1 flex-row gap-3 items-center justify-center p-4 w-full">
                        <Img
                          className="h-[72px] md:h-auto object-cover rounded-[16px] w-[72px]"
                          src="images/img_rectangle3.png"
                          alt="rectangleThree"
                        />
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="text-gray-900 text-xl w-full"
                              size="txtRobotoBold20"
                            >
                              A Peak into Earth Home mysteries by Pavan
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                              <Img
                                className="h-6 md:h-auto rounded-[50%] w-6"
                                src="images/img_ellipse2_24x24.png"
                                alt="ellipseTwo"
                              />
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                John Barker
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_pheyebold.svg"
                                alt="pheyebold"
                              />
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                1.8K
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-1 flex-row gap-3 items-center justify-center p-4 w-full">
                        <Img
                          className="h-[72px] md:h-auto object-cover rounded-[16px] w-[72px]"
                          src="images/img_rectangle3.png"
                          alt="rectangleThree"
                        />
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="text-gray-900 text-xl w-full"
                              size="txtRobotoBold20"
                            >
                              A Peak into Earth Home mysteries by Pavan
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                              <Img
                                className="h-6 md:h-auto rounded-[50%] w-6"
                                src="images/img_ellipse2_24x24.png"
                                alt="ellipseTwo"
                              />
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                John Barker
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_pheyebold.svg"
                                alt="pheyebold"
                              />
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                1.8K
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-1 flex-row gap-3 items-center justify-center p-4 w-full">
                        <Img
                          className="h-[72px] md:h-auto object-cover rounded-[16px] w-[72px]"
                          src="images/img_rectangle3.png"
                          alt="rectangleThree"
                        />
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="text-gray-900 text-xl w-full"
                              size="txtRobotoBold20"
                            >
                              A Peak into Earth Home mysteries by Pavan
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                              <Img
                                className="h-6 md:h-auto rounded-[50%] w-6"
                                src="images/img_ellipse2_24x24.png"
                                alt="ellipseTwo"
                              />
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                John Barker
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_pheyebold.svg"
                                alt="pheyebold"
                              />
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                1.8K
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-1 flex-row gap-3 items-center justify-center p-4 w-full">
                        <Img
                          className="h-[72px] md:h-auto object-cover rounded-[16px] w-[72px]"
                          src="images/img_rectangle3.png"
                          alt="rectangleThree"
                        />
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="text-gray-900 text-xl w-full"
                              size="txtRobotoBold20"
                            >
                              A Peak into Earth Home mysteries by Pavan
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                              <Img
                                className="h-6 md:h-auto rounded-[50%] w-6"
                                src="images/img_ellipse2_24x24.png"
                                alt="ellipseTwo"
                              />
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                John Barker
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_pheyebold.svg"
                                alt="pheyebold"
                              />
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                1.8K
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-1 flex-row gap-3 items-center justify-center p-4 w-full">
                        <Img
                          className="h-[72px] md:h-auto object-cover rounded-[16px] w-[72px]"
                          src="images/img_rectangle3.png"
                          alt="rectangleThree"
                        />
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="text-gray-900 text-xl w-full"
                              size="txtRobotoBold20"
                            >
                              A Peak into Earth Home mysteries by Pavan
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                            <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                              <Img
                                className="h-6 md:h-auto rounded-[50%] w-6"
                                src="images/img_ellipse2_24x24.png"
                                alt="ellipseTwo"
                              />
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtRobotoRegular12"
                              >
                                John Barker
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_pheyebold.svg"
                                alt="pheyebold"
                              />
                              <Text
                                className="text-gray-900 text-xs w-auto"
                                size="txtRobotoRegular12"
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
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <div className="flex flex-col h-10 md:h-auto items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-cyan-700 sm:text-xl w-auto"
                    size="txtRobotoBold24Cyan700"
                  >
                    Related Articles
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start py-2 w-full"
                  orientation="horizontal"
                >
                  <div className="border border-gray-300 border-solid flex flex-col gap-4 h-72 md:h-auto items-center justify-start py-4 rounded-[16px] w-[280px]">
                    <Img
                      className="h-[200px] md:h-auto object-cover rounded-[16px] w-60 sm:w-full"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-gray-900 text-xl w-full"
                        size="txtRobotoBold20"
                      >
                        Autobiographies that can convert you in...
                      </Text>
                    </div>
                  </div>
                  <div className="border border-gray-300 border-solid flex flex-col gap-4 h-72 md:h-auto items-center justify-start py-4 rounded-[16px] w-[280px]">
                    <Img
                      className="h-[200px] md:h-auto object-cover rounded-[16px] w-60 sm:w-full"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-gray-900 text-xl w-full"
                        size="txtRobotoBold20"
                      >
                        Autobiographies that can convert you in...
                      </Text>
                    </div>
                  </div>
                  <div className="border border-gray-300 border-solid flex flex-col gap-4 h-72 md:h-auto items-center justify-start py-4 rounded-[16px] w-[276px]">
                    <Img
                      className="h-[200px] md:h-auto object-cover rounded-[16px] w-60 sm:w-full"
                      src="images/img_rectangle6.png"
                      alt="rectangleSix"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-gray-900 text-xl w-full"
                        size="txtRobotoBold20"
                      >
                        Autobiographies that can convert you in...
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-[300px]">
              <div className="bg-gray-100 border border-gray-300 border-solid flex flex-col gap-6 items-center justify-start px-4 py-5 rounded-[16px] w-full">
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtRobotoRegular20Black900"
                >
                  Article by
                </Text>
                <Img
                  className="h-[104px] md:h-auto rounded-[50%] w-[104px]"
                  src="images/img_ellipse3.png"
                  alt="ellipseThree"
                />
                <div className="flex flex-col gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-gray-900 text-xl w-auto"
                    size="txtRobotoRegular20Gray900"
                  >
                    Tom Cruse Martin King
                  </Text>
                  <div className="flex flex-row gap-4 items-start justify-start w-auto">
                    <div className="flex flex-row gap-3 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconamoonprofilelight.svg"
                        alt="iconamoonprofil"
                      />
                      <Text
                        className="text-base text-gray-600 w-auto"
                        size="txtRobotoRegular16Gray600"
                      >
                        2.1k
                      </Text>
                    </div>
                    <Line className="bg-gray-600 h-6 w-px" />
                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_pheyebold_gray_600.svg"
                        alt="pheyebold"
                      />
                      <Text
                        className="text-gray-600 text-xl w-auto"
                        size="txtRobotoRegular20Gray600"
                      >
                        1.8K
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Img
                    className="h-9 w-9"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                  <Img
                    className="h-9 w-9"
                    src="images/img_link.svg"
                    alt="link"
                  />
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    color="cyan_700"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_airplane.svg"
                      alt="airplane"
                    />
                  </Button>
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="circle"
                    color="cyan_700"
                    size="xs"
                    variant="fill"
                  >
                    <Img className="h-5" src="images/img_info.svg" alt="info" />
                  </Button>
                </div>
              </div>
              <Img
                className="h-[300px] md:h-auto object-cover w-[300px]"
                src="images/img_rectangle14.png"
                alt="rectangleFourteen"
              />
              <div className="flex flex-col gap-4 items-start justify-center w-full">
                <div className="flex flex-col h-10 md:h-auto items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl w-auto"
                    size="txtRobotoBold24"
                  >
                    Hot Categories
                  </Text>
                </div>
                <List
                  className="flex flex-col gap-4 items-start w-full"
                  orientation="vertical"
                >
                  <div className="h-20 my-0 relative w-full">
                    <Img
                      className="h-20 m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle2_528x690.png"
                      alt="rectangleTwo"
                    />
                    <div className="absolute flex flex-col md:h-auto h-max inset-y-[0] items-center justify-start left-[11%] my-auto w-[159px]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtRobotoBold24WhiteA700"
                        >
                          Entertainment
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-20 my-0 relative w-full">
                    <Img
                      className="h-20 m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle3_160x486.png"
                      alt="rectangleThree"
                    />
                    <div className="absolute bottom-[29%] flex flex-col h-[29px] md:h-auto inset-x-[0] items-center justify-start mx-auto w-[241px]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtRobotoBold24WhiteA700"
                        >
                          Life Style
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-20 my-0 relative w-full">
                    <Img
                      className="h-20 m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle4.png"
                      alt="rectangleFour"
                    />
                    <div className="absolute flex flex-col md:h-auto h-max inset-y-[0] items-center justify-start left-[11%] my-auto w-[165px]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtRobotoBold24WhiteA700"
                        >
                          Tech
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-20 my-0 relative w-full">
                    <Img
                      className="h-20 m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle4_160x486.png"
                      alt="rectangleFour"
                    />
                    <div className="absolute flex flex-col md:h-auto h-max inset-y-[0] items-center justify-start left-[11%] my-auto w-[207px]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                          size="txtRobotoBold24WhiteA700"
                        >
                          Videos
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="border border-gray-300 border-solid flex flex-col gap-2 items-start justify-start p-4 rounded-[16px] w-full">
                <Text
                  className="text-gray-900 text-xl w-auto"
                  size="txtRobotoBold20"
                >
                  Trending
                </Text>
                <List
                  className="flex flex-col gap-2 items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-1 flex-row gap-3 items-center justify-center py-2 w-full">
                    <Img
                      className="h-16 md:h-auto object-cover rounded-[16px] w-16"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          A Peak into Earth Home mysteries by Pavan
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-1 flex-row gap-3 items-center justify-center py-2 w-full">
                    <Img
                      className="h-16 md:h-auto object-cover rounded-[16px] w-16"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          A Peak into Earth Home mysteries by Pavan
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-1 flex-row gap-3 items-center justify-center py-2 w-full">
                    <Img
                      className="h-16 md:h-auto object-cover rounded-[16px] w-16"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          A Peak into Earth Home mysteries by Pavan
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-1 flex-row gap-3 items-center justify-center py-2 w-full">
                    <Img
                      className="h-16 md:h-auto object-cover rounded-[16px] w-16"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          A Peak into Earth Home mysteries by Pavan
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <Img
                className="h-[600px] sm:h-auto object-cover w-[300px] md:w-full"
                src="images/img_rectangle15.png"
                alt="rectangleFifteen"
              />
              <List
                className="flex flex-col gap-6 items-center w-full"
                orientation="vertical"
              >
                <div className="border border-gray-300 border-solid flex flex-1 flex-col gap-2 items-start justify-start p-4 rounded-[16px] w-full">
                  <Text
                    className="text-gray-900 text-xl w-auto"
                    size="txtRobotoBold20"
                  >
                    Whats new today
                  </Text>
                  <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-row gap-3 items-center justify-center py-2 w-full">
                    <Img
                      className="h-16 md:h-auto object-cover rounded-[16px] w-16"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          A Peak into Earth Home mysteries by Pavan
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-row gap-3 items-center justify-center py-2 w-full">
                    <Img
                      className="h-16 md:h-auto object-cover rounded-[16px] w-16"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree_One"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          A Peak into Earth Home mysteries by Pavan
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-row gap-3 items-center justify-center py-2 w-full">
                    <Img
                      className="h-16 md:h-auto object-cover rounded-[16px] w-16"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree_Two"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          A Peak into Earth Home mysteries by Pavan
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-row gap-3 items-center justify-center py-2 w-full">
                    <Img
                      className="h-16 md:h-auto object-cover rounded-[16px] w-16"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree_Three"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          A Peak into Earth Home mysteries by Pavan
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-row gap-3 items-center justify-center py-2 w-full">
                    <Img
                      className="h-16 md:h-auto object-cover rounded-[16px] w-16"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree_Four"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          A Peak into Earth Home mysteries by Pavan
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-300 border-solid flex flex-1 flex-col gap-2 items-start justify-start p-4 rounded-[16px] w-full">
                  <Text
                    className="text-gray-900 text-xl w-auto"
                    size="txtRobotoBold20"
                  >
                    Recommended
                  </Text>
                  <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-row gap-3 items-center justify-center py-2 w-full">
                    <Img
                      className="h-16 md:h-auto object-cover rounded-[16px] w-16"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          A Peak into Earth Home mysteries by Pavan
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-row gap-3 items-center justify-center py-2 w-full">
                    <Img
                      className="h-16 md:h-auto object-cover rounded-[16px] w-16"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree_One"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          A Peak into Earth Home mysteries by Pavan
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-row gap-3 items-center justify-center py-2 w-full">
                    <Img
                      className="h-16 md:h-auto object-cover rounded-[16px] w-16"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree_Two"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          A Peak into Earth Home mysteries by Pavan
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-row gap-3 items-center justify-center py-2 w-full">
                    <Img
                      className="h-16 md:h-auto object-cover rounded-[16px] w-16"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree_Three"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          A Peak into Earth Home mysteries by Pavan
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 border-b border-gray-300 border-solid flex flex-row gap-3 items-center justify-center py-2 w-full">
                    <Img
                      className="h-16 md:h-auto object-cover rounded-[16px] w-16"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree_Four"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtRobotoRegular16"
                        >
                          A Peak into Earth Home mysteries by Pavan
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <Footer className="bg-gray-900 flex items-center justify-center mt-[248px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default WebFoodArticlePage;
