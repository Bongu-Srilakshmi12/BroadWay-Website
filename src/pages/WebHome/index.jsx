import React from "react";

import { Button, Img, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import { Link } from "react-router-dom";

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

const WebHomePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-roboto items-center justify-start mx-auto w-full">
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
        <header className="flex flex-col items-center justify-center px-2 md:px-5 py-4 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 h-14 md:h-auto items-center justify-between max-w-[1200px] w-full">
            <div className="flex flex-row gap-4 h-[52px] md:h-auto items-center justify-start w-auto">
              <Img
                className="h-10 w-10"
                src="images/img_icroundmenu.svg"
                alt="icroundmenu"
              />
              <Img
                className="h-[52px] md:h-auto object-cover w-60"
                src="images/img_pnglogo1.png"
                alt="pnglogoOne"
              />
            </div>
            <div className="border border-gray-600 border-solid flex sm:flex-1 flex-row gap-4 items-center justify-between px-4 py-2 rounded-[20px] w-[400px] sm:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-600 sm:text-xl w-auto"
                size="txtRobotoRegular24"
              >
                Search
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_rewind.svg"
                alt="rewind"
              />
            </div>
            <div className="flex flex-row gap-9 items-center justify-start w-auto">
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
              <Img
                className="h-9 w-9"
                src="images/img_iconoirprofilecircle.svg"
                alt="iconoirprofilec"
              />
            </div>
          </div>
        </header>
        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1162px] mt-5 mx-auto md:px-5 w-full">
          <Button
            className="cursor-pointer leading-[normal] min-w-[117px] text-center text-xl"
            shape="square"
            color="gray_100"
            size="xs"
            variant="fill"
          >
            <Link to="webcitieshyderabad">City Guides</Link>
          </Button>
          <SelectBox
            className="sm:flex-1 h-10 leading-[normal] text-left text-xl w-[11%] sm:w-full"
            placeholderClassName="text-gray-900"
            indicator={
              <Img
                className="h-6 w-6"
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
            className="sm:flex-1 h-10 leading-[normal] text-left text-xl w-[15%] sm:w-full"
            placeholderClassName="text-gray-900"
            indicator={
              <Img
                className="h-6 w-6"
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
          <Button
            className="cursor-pointer h-10 leading-[normal] min-w-[70px] text-center text-xl"
            shape="square"
            color="gray_100"
            size="xs"
            variant="fill"
          >
            Travel
          </Button>
          <Button
            className="cursor-pointer h-10 leading-[normal] min-w-[61px] text-center text-xl"
            shape="square"
            color="gray_100"
            size="xs"
            variant="fill"
          >
            <Link to="webfooddining">Food</Link>
          </Button>
          <SelectBox
            className="sm:flex-1 h-10 leading-[normal] text-left text-xl w-[8%] sm:w-full"
            placeholderClassName="text-gray-900"
            indicator={
              <Img
                className="h-6 w-6"
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
            className="sm:flex-1 h-10 leading-[normal] text-left text-xl w-[15%] sm:w-full"
            placeholderClassName="text-gray-900"
            indicator={
              <Img
                className="h-6 w-6"
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
          <Button
            className="cursor-pointer h-10 leading-[normal] min-w-[76px] text-center text-xl"
            shape="square"
            color="gray_100"
            size="xs"
            variant="fill"
          >
            Money
          </Button>
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
            <Link to="webwebstories">Web Stories</Link>
          </Button>
          <SelectBox
            className="sm:flex-1 h-10 leading-[normal] text-left text-xl w-[9%] sm:w-full"
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
        <Img
          className="h-[480px] sm:h-auto mt-5 object-cover w-full"
          src="images/img_rectangle1.png"
          alt="rectangleOne"
        />
        <div className="h-[1584px] sm:h-[1650px] md:h-[2056px] mt-14 md:px-5 relative w-full">
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-[951px] inset-x-[0] items-center justify-start mx-auto p-[120px] md:px-10 sm:px-5 top-[14%] w-full"
            style={{ backgroundImage: "url('images/img_group5.png')" }}
          >
            <div className="flex flex-col gap-6 items-start justify-end max-w-[1200px] mb-[207px] mt-36 w-full">
              <div className="flex flex-row gap-2 h-10 md:h-auto items-center justify-start max-w-[1200px] w-full">
                <Img
                  className="h-8 w-8"
                  src="images/img_itrending.svg"
                  alt="itrending"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                  size="txtRobotoBold32"
                >
                  Trending
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-6 h-[296px] md:h-auto items-center justify-start max-w-[1200px] w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[86%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray-100 flex flex-col items-center justify-start rounded-[16px] shadow-bs w-auto">
                    <div className="flex flex-col gap-4 h-72 md:h-auto items-center justify-start py-4 rounded-[16px] w-60">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-[200px]"
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
                  </div>
                  <div className="bg-gray-100 flex flex-col items-center justify-start rounded-[16px] shadow-bs w-auto">
                    <div className="flex flex-col gap-4 h-72 md:h-auto items-center justify-start py-4 rounded-[16px] w-60">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-[200px]"
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
                  </div>
                  <div className="bg-gray-100 flex flex-col items-center justify-start rounded-[16px] shadow-bs w-auto">
                    <div className="flex flex-col gap-4 h-72 md:h-auto items-center justify-start py-4 rounded-[16px] w-60">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-[200px]"
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
                  </div>
                  <div className="bg-gray-100 flex flex-col items-center justify-start rounded-[16px] shadow-bs w-auto">
                    <div className="flex flex-col gap-4 h-72 md:h-auto items-center justify-start py-4 rounded-[16px] w-60">
                      <Img
                        className="h-[200px] md:h-auto object-cover rounded-[16px] w-[200px]"
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
                  </div>
                </List>
                <div className="bg-gray-100 flex flex-col items-center justify-start rounded-[16px] shadow-bs w-auto">
                  <div className="flex flex-col gap-4 h-72 md:h-auto items-center justify-start py-4 w-36">
                    <Img
                      className="h-[200px] md:h-auto object-cover rounded-[16px] w-[124px] sm:w-full"
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
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col md:gap-10 gap-[520px] h-full inset-[0] items-center justify-center m-auto w-[84%]">
            <List
              className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-6 items-start justify-start w-[588px] sm:w-full">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_search.svg"
                    alt="search"
                  />
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                    size="txtRobotoBold32Gray900"
                  >
                    City Guides
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-[59px] items-start justify-start w-[90%]">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
                        <Img
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          src="images/img_ellipse1.png"
                          alt="ellipseOne"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          <Link to="webcitieshyderabad">Hyderabad</Link>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
                        <Img
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          src="images/img_ellipse1_80x80.png"
                          alt="ellipseOne_One"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          <Link to="webcitieshyderabad">Bangalore</Link>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
                        <Img
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          src="images/img_ellipse1_1.png"
                          alt="ellipseOne_Two"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          <Link to="webcitieshyderabad">Chennai</Link>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
                        <Img
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          src="images/img_ellipse1_2.png"
                          alt="ellipseOne_Three"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          <Link to="webcitieshyderabad">Kolkata</Link>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[60px] items-center justify-start w-[69%] md:w-full">
                      <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
                        <Img
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          src="images/img_ellipse1_3.png"
                          alt="ellipseOne_Four"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          <Link to="webcitieshyderabad">Delhi</Link>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
                        <Img
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          src="images/img_ellipse1_4.png"
                          alt="ellipseOne_Five"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          <Link to="webcitieshyderabad">Mumbai</Link>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
                        <Img
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          src="images/img_ellipse1_5.png"
                          alt="ellipseOne_Six"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          <Link to="webcitieshyderabad">Noida</Link>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-[588px] sm:w-full">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_ilifestyle.svg"
                    alt="ilifestyle"
                  />
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                    size="txtRobotoBold32Gray900"
                  >
                    Life Style
                  </Text>
                </div>
                <div className="flex flex-col h-[338px] md:h-auto items-start justify-start w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-[86%]">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
                        <Img
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          src="images/img_ellipse1_6.png"
                          alt="ellipseOne"
                        />
                        <Text
                          className="text-center text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          <>
                            <Link to="webshopping">
                            Women’s
                            <br />
                            Fashion
                            </Link>
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
                        <Img
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          src="images/img_ellipse1_7.png"
                          alt="ellipseOne_One"
                        />
                        <Text
                          className="text-center text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          <>
                           <Link to="webshopping">
                            Men’s
                              <br />
                              Fashion
                           </Link>
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
                        <Img
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          src="images/img_ellipse1_8.png"
                          alt="ellipseOne_Two"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          <Link to="webshopping">
                          Skin Care
                          </Link>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
                        <Img
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          src="images/img_ellipse1_9.png"
                          alt="ellipseOne_Three"
                        />
                        <Text
                          className="text-center text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          <>
                           <Link to="webshopping">
                              Home
                              <br />
                              Basics
                           </Link>
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[60px] items-start justify-start w-[53%] md:w-full">
                      <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
                        <Img
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          src="images/img_ellipse1_10.png"
                          alt="ellipseOne_Four"
                        />
                        <Text
                          className="text-center text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          <>
                            <Link to="webshopping">
                            Apartment
                            <br />
                            Living
                            </Link>
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
                        <Img
                          className="h-20 md:h-auto rounded-[50%] w-20"
                          src="images/img_ellipse1_11.png"
                          alt="ellipseOne_Five"
                        />
                        <Text
                          className="text-center text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          <Link to="webshopping">
                          Accessories
                          </Link>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <div className="flex sm:flex-col flex-row gap-6 h-10 md:h-auto items-center justify-between w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                  size="txtRobotoBold32"
                >
                  What’s New Today
                </Text>
                <Text
                  className="bg-gray-100 h-9 justify-center px-4 py-[3px] rounded-[16px] text-2xl md:text-[22px] text-cyan-700 text-shadow-ts sm:text-xl w-auto"
                  size="txtRobotoRegular24Cyan700"
                >
                  <Link to="webexploremore">Explore More &gt;</Link>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1200px] w-full">
                <div className="bg-gray-100 flex sm:flex-1 flex-col gap-4 h-[600px] md:h-auto items-center justify-start p-4 rounded-[16px] shadow-bs w-[588px] sm:w-full">
                  <Img
                    className="h-[400px] md:h-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle2.png"
                    alt="rectangleTwo"
                  />
                  <div className="flex flex-col gap-4 h-full items-start justify-center w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                        size="txtRobotoBold24"
                      >
                        Autobiographies that can convert you into non fiction
                        stan.
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_ellipse2.png"
                          alt="ellipseTwo"
                        />
                        <Text
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
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
                          className="text-gray-900 text-xl w-auto"
                          size="txtRobotoRegular20Gray900"
                        >
                          1.8K
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-6 h-[600px] items-center w-[588px]"
                  orientation="vertical"
                >
                  <div className="bg-gray-100 flex sm:flex-col flex-row gap-4 items-center justify-center my-0 p-4 rounded-[16px] shadow-bs w-full">
                    <Img
                      className="h-36 md:h-auto object-cover rounded-[16px] w-36"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree"
                    />
                    <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          A Peak into Earth Home mysteries by Pavan
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                        <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                          <Img
                            className="h-10 md:h-auto rounded-[50%] w-10"
                            src="images/img_ellipse2.png"
                            alt="ellipseTwo"
                          />
                          <Text
                            className="text-gray-900 text-xl w-auto"
                            size="txtRobotoRegular20Gray900"
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
                            className="text-gray-900 text-xl w-auto"
                            size="txtRobotoRegular20Gray900"
                          >
                            1.8K
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 flex sm:flex-col flex-row gap-4 items-center justify-center my-0 p-4 rounded-[16px] shadow-bs w-full">
                    <Img
                      className="h-36 md:h-auto object-cover rounded-[16px] w-36"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree"
                    />
                    <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          A Peak into Earth Home mysteries by Pavan
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                        <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                          <Img
                            className="h-10 md:h-auto rounded-[50%] w-10"
                            src="images/img_ellipse2.png"
                            alt="ellipseTwo"
                          />
                          <Text
                            className="text-gray-900 text-xl w-auto"
                            size="txtRobotoRegular20Gray900"
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
                            className="text-gray-900 text-xl w-auto"
                            size="txtRobotoRegular20Gray900"
                          >
                            1.8K
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100 flex sm:flex-col flex-row gap-4 items-center justify-center my-0 p-4 rounded-[16px] shadow-bs w-full">
                    <Img
                      className="h-36 md:h-auto object-cover rounded-[16px] w-36"
                      src="images/img_rectangle3.png"
                      alt="rectangleThree"
                    />
                    <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          A Peak into Earth Home mysteries by Pavan
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                        <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                          <Img
                            className="h-10 md:h-auto rounded-[50%] w-10"
                            src="images/img_ellipse2.png"
                            alt="ellipseTwo"
                          />
                          <Text
                            className="text-gray-900 text-xl w-auto"
                            size="txtRobotoRegular20Gray900"
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
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-start mt-20 p-16 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-6 items-start justify-start max-w-[1200px] mx-auto w-full">
            <div className="flex flex-row gap-6 h-10 md:h-auto items-center justify-between w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Img className="h-8 w-8" src="images/img_star.svg" alt="star" />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                  size="txtRobotoBold32"
                >
                  Videos
                </Text>
              </div>
              <Text
                className="bg-gray-100 h-9 justify-center px-4 py-[3px] rounded-[16px] text-2xl md:text-[22px] text-cyan-700 sm:text-xl w-auto"
                size="txtRobotoRegular24Cyan700"
              >
                <Link to="webexploremore">Explore More &gt;</Link>
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1200px] w-full">
              <div className="flex md:flex-1 flex-col gap-4 h-[560px] md:h-auto items-start justify-start w-auto md:w-full">
                <Img
                  className="md:h-[458px] sm:h-auto h-full object-cover w-[792px] md:w-full"
                  src="images/img_rectangle2_458x792.png"
                  alt="rectangleTwo_One"
                />
                <div className="flex flex-col gap-2 items-start justify-start max-w-[792px] w-full">
                  <div className="flex flex-col items-center justify-center">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 w-auto"
                      size="txtRobotoBold32Gray100"
                    >
                      <Link to="webvideos">Trip to Mountains on Bike</Link>
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-between w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-full">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_ellipse2.png"
                        alt="ellipseTwo_One"
                      />
                      <Text
                        className="text-gray-100 text-xl w-auto"
                        size="txtRobotoRegular20"
                      >
                        John Barker
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="flex md:flex-1 flex-col gap-6 h-[560px] items-center w-96 md:w-full"
                orientation="vertical"
              >
                <div className="border-b border-gray-100 border-solid flex flex-row gap-4 h-[120px] md:h-auto items-center justify-center my-0 p-4 w-96 sm:w-full">
                  <Img
                    className="h-[88px] md:h-auto object-cover w-[88px]"
                    src="images/img_rectangle3_88x88.png"
                    alt="rectangleThree"
                  />
                  <div className="flex flex-col gap-2 h-full items-start justify-center w-full">
                    <div className="flex flex-col items-start justify-start pb-[11px] pr-[11px] w-full">
                      <Text
                        className="text-gray-100 text-xl"
                        size="txtRobotoBold20Gray100"
                      >
                        <Link to="webvideos">Trip to Mountains on Bike</Link>
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-gray-600 text-xl w-auto"
                        size="txtRobotoRegular20Gray600"
                      >
                        4:45
                      </Text>
                      <Text
                        className="text-gray-600 text-xl w-auto"
                        size="txtRobotoRegular20Gray600"
                      >
                        Uploaded by Rohan Sharma
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-100 border-solid flex flex-row gap-4 h-[120px] md:h-auto items-center justify-center my-0 p-4 w-96 sm:w-full">
                  <Img
                    className="h-[88px] md:h-auto object-cover w-[88px]"
                    src="images/img_rectangle3_88x88.png"
                    alt="rectangleThree"
                  />
                  <div className="flex flex-col gap-2 h-full items-start justify-center w-full">
                    <div className="flex flex-col items-start justify-start pb-[11px] pr-[11px] w-full">
                      <Text
                        className="text-gray-100 text-xl"
                        size="txtRobotoBold20Gray100"
                      >
                        <Link to="webvideos">Trip to Mountains on Bike</Link>
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-gray-600 text-xl w-auto"
                        size="txtRobotoRegular20Gray600"
                      >
                        4:45
                      </Text>
                      <Text
                        className="text-gray-600 text-xl w-auto"
                        size="txtRobotoRegular20Gray600"
                      >
                        Uploaded by Rohan Sharma
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-100 border-solid flex flex-row gap-4 h-[120px] md:h-auto items-center justify-center my-0 p-4 w-96 sm:w-full">
                  <Img
                    className="h-[88px] md:h-auto object-cover w-[88px]"
                    src="images/img_rectangle3_88x88.png"
                    alt="rectangleThree"
                  />
                  <div className="flex flex-col gap-2 h-full items-start justify-center w-full">
                    <div className="flex flex-col items-start justify-start pb-[11px] pr-[11px] w-full">
                      <Text
                        className="text-gray-100 text-xl"
                        size="txtRobotoBold20Gray100"
                      >
                        <Link to="webvideos">Trip to Mountains on Bike</Link>
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-gray-600 text-xl w-auto"
                        size="txtRobotoRegular20Gray600"
                      >
                        4:45
                      </Text>
                      <Text
                        className="text-gray-600 text-xl w-auto"
                        size="txtRobotoRegular20Gray600"
                      >
                        Uploaded by Rohan Sharma
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-100 border-solid flex flex-row gap-4 h-[120px] md:h-auto items-center justify-center my-0 p-4 w-96 sm:w-full">
                  <Img
                    className="h-[88px] md:h-auto object-cover w-[88px]"
                    src="images/img_rectangle3_88x88.png"
                    alt="rectangleThree"
                  />
                  <div className="flex flex-col gap-2 h-full items-start justify-center w-full">
                    <div className="flex flex-col items-start justify-start pb-[11px] pr-[11px] w-full">
                      <Text
                        className="text-gray-100 text-xl"
                        size="txtRobotoBold20Gray100"
                      >
                        <Link to="webvideos">Trip to Mountains on Bike</Link>
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-gray-600 text-xl w-auto"
                        size="txtRobotoRegular20Gray600"
                      >
                        4:45
                      </Text>
                      <Text
                        className="text-gray-600 text-xl w-auto"
                        size="txtRobotoRegular20Gray600"
                      >
                        Uploaded by Rohan Sharma
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start justify-start max-w-[1200px] mt-20 mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row gap-6 h-10 md:h-auto items-center justify-between w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-8 w-8"
                src="images/img_ientertainment.svg"
                alt="ientertainment"
              />
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                size="txtRobotoBold32"
              >
                Entertainment
              </Text>
            </div>
            <Text
              className="bg-gray-100 border border-cyan-700 border-solid h-9 justify-center px-4 py-[3px] rounded-[16px] text-2xl md:text-[22px] text-cyan-700 text-shadow-ts sm:text-xl w-auto"
              size="txtRobotoRegular24Cyan700"
            >
              <Link to="webexploremore">Explore More &gt;</Link>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-6 h-[528px] md:h-auto items-start justify-start w-full">
            <div className="h-[528px] relative w-[58%] md:w-full">
              <Img
                className="h-[528px] m-auto object-cover rounded-[16px] w-full"
                src="images/img_rectangle2_528x690.png"
                alt="rectangleTwo_Two"
              />
              <div className="absolute bottom-[8%] flex flex-col items-center justify-start left-[5%] w-[170px]">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                    size="txtRobotoBold48"
                  >
                    <Link to="webmoviearticle">Movies</Link>
                  </Text>
                </div>
              </div>
            </div>
            <List
              className="flex flex-col gap-6 h-[528px] items-center w-auto"
              orientation="vertical"
            >
              <div className="h-40 my-0 relative w-full">
                <Img
                  className="h-40 m-auto object-cover rounded-[16px] w-full"
                  src="images/img_rectangle3_160x486.png"
                  alt="rectangleThree"
                />
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-start m-auto w-[411px] sm:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                      size="txtRobotoBold48"
                    >
                      <Link to="webmoviearticle">Korean</Link>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-40 my-0 relative w-full">
                <Img
                  className="h-40 m-auto object-cover rounded-[16px] w-full"
                  src="images/img_rectangle4.png"
                  alt="rectangleFour"
                />
                <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[7%] my-auto w-[400px] sm:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                      size="txtRobotoBold48"
                    >
                      <Link to="webmoviearticle">TV Series</Link>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-40 my-0 relative w-full">
                <Img
                  className="h-40 m-auto object-cover rounded-[16px] w-full"
                  src="images/img_rectangle4_160x486.png"
                  alt="rectangleFour"
                />
                <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[7%] my-auto w-auto">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                      size="txtRobotoBold48"
                    >
                      <Link to="webmoviearticle">Latest Trailers</Link>
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[2122px] items-center justify-end p-6 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group4.png')" }}
        >
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1200px] mt-14 mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[79px] items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex sm:flex-col flex-row gap-6 h-10 md:h-auto items-center justify-between w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_itech.svg"
                      alt="itech"
                    />
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                      size="txtRobotoBold32"
                    >
                      Technology
                    </Text>
                  </div>
                  <Text
                    className="bg-gray-100 h-9 justify-center px-4 py-[3px] rounded-[16px] text-2xl md:text-[22px] text-cyan-700 text-shadow-ts sm:text-xl w-auto"
                    size="txtRobotoRegular24Cyan700"
                  >
                    <Link to="webexploremore">Explore More &gt;</Link>
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1200px] w-full">
                  <div className="bg-gray-100 flex sm:flex-1 flex-col gap-4 h-[600px] md:h-auto items-center justify-start p-4 rounded-[16px] shadow-bs w-[588px] sm:w-full">
                    <Img
                      className="h-[400px] md:h-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle2.png"
                      alt="rectangleTwo_Three"
                    />
                    <div className="flex flex-col gap-4 h-full items-start justify-center w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          Autobiographies that can convert you into non fiction
                          stan.
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                        <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                          <Img
                            className="h-10 md:h-auto rounded-[50%] w-10"
                            src="images/img_ellipse2.png"
                            alt="ellipseTwo_Two"
                          />
                          <Text
                            className="text-gray-900 text-xl w-auto"
                            size="txtRobotoRegular20Gray900"
                          >
                            John Barker
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
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-6 h-[600px] items-center w-[588px]"
                    orientation="vertical"
                  >
                    <div className="bg-gray-100 flex sm:flex-col flex-row gap-4 items-center justify-center my-0 p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-36 md:h-auto object-cover rounded-[16px] w-36"
                        src="images/img_rectangle3.png"
                        alt="rectangleThree"
                      />
                      <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                            size="txtRobotoBold24"
                          >
                            A Peak into Earth Home mysteries by Pavan
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                            <Img
                              className="h-10 md:h-auto rounded-[50%] w-10"
                              src="images/img_ellipse2.png"
                              alt="ellipseTwo"
                            />
                            <Text
                              className="text-gray-900 text-xl w-auto"
                              size="txtRobotoRegular20Gray900"
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
                              className="text-gray-900 text-xl w-auto"
                              size="txtRobotoRegular20Gray900"
                            >
                              1.8K
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 flex sm:flex-col flex-row gap-4 items-center justify-center my-0 p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-36 md:h-auto object-cover rounded-[16px] w-36"
                        src="images/img_rectangle3.png"
                        alt="rectangleThree"
                      />
                      <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                            size="txtRobotoBold24"
                          >
                            A Peak into Earth Home mysteries by Pavan
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                            <Img
                              className="h-10 md:h-auto rounded-[50%] w-10"
                              src="images/img_ellipse2.png"
                              alt="ellipseTwo"
                            />
                            <Text
                              className="text-gray-900 text-xl w-auto"
                              size="txtRobotoRegular20Gray900"
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
                              className="text-gray-900 text-xl w-auto"
                              size="txtRobotoRegular20Gray900"
                            >
                              1.8K
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 flex sm:flex-col flex-row gap-4 items-center justify-center my-0 p-4 rounded-[16px] shadow-bs w-full">
                      <Img
                        className="h-36 md:h-auto object-cover rounded-[16px] w-36"
                        src="images/img_rectangle3.png"
                        alt="rectangleThree"
                      />
                      <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                            size="txtRobotoBold24"
                          >
                            A Peak into Earth Home mysteries by Pavan
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                            <Img
                              className="h-10 md:h-auto rounded-[50%] w-10"
                              src="images/img_ellipse2.png"
                              alt="ellipseTwo"
                            />
                            <Text
                              className="text-gray-900 text-xl w-auto"
                              size="txtRobotoRegular20Gray900"
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
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-end max-w-[1200px] w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1200px] w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_iwebstories.svg"
                      alt="iwebstories"
                    />
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                      size="txtRobotoBold32"
                    >
                      Web Stories
                    </Text>
                  </div>
                  <Text
                    className="bg-gray-100 h-9 justify-center px-4 py-[3px] rounded-[16px] text-2xl md:text-[22px] text-cyan-700 text-shadow-ts sm:text-xl w-auto"
                    size="txtRobotoRegular24Cyan700"
                  >
                    <Link to="webexploremore">Explore More &gt;</Link>
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
                  orientation="horizontal"
                >
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle6_540x282.png"
                      alt="rectangleSix"
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
                         <Link to="webwebstories">
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                         </Link>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle7.png"
                      alt="rectangleSeven"
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
                          <Link to="webwebstories">
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                         </Link>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8.png"
                      alt="rectangleEight"
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
                          <Link to="webwebstories">
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                         </Link>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="h-[540px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle8_540x282.png"
                      alt="rectangleEight"
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
                          <Link to="webwebstories">
                            Sophisticated <br />
                            White to Snazzy <br />
                            Patterned
                         </Link>
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <div className="flex flex-row gap-6 h-10 md:h-auto items-center justify-between w-full">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_itravel.svg"
                    alt="itravel"
                  />
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                    size="txtRobotoBold32"
                  >
                    Travel
                  </Text>
                </div>
                <Text
                  className="bg-gray-100 h-9 justify-center px-4 py-[3px] rounded-[16px] text-2xl md:text-[22px] text-cyan-700 text-shadow-ts sm:text-xl w-auto"
                  size="txtRobotoRegular24Cyan700"
                >
                  <Link to="webexploremore">Explore More &gt;</Link>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-6 h-[528px] md:h-auto items-start justify-start w-auto md:w-full">
                <div className="h-[528px] relative w-[49%] md:w-full">
                  <Img
                    className="h-[528px] m-auto object-cover rounded-[16px] w-full"
                    src="images/img_rectangle2_528x588.png"
                    alt="rectangleTwo_Four"
                  />
                  <div className="absolute bottom-[6%] flex flex-col gap-4 items-start justify-start left-[5%] w-auto">
                    <div className="flex flex-col items-center justify-start pr-0.5 pt-0.5 w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-gray-100"
                        size="txtRobotoBold48Gray100"
                      >
                        A Trip to Mountains
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[17px] items-center justify-start w-auto">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_ellipse2.png"
                        alt="ellipseTwo_Three"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-gray-100 sm:text-xl w-auto"
                        size="txtRobotoRegular24Gray100"
                      >
                        John Barker
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-6 h-[528px] items-center w-auto"
                  orientation="vertical"
                >
                  <div className="h-[252px] my-0 relative w-full">
                    <Img
                      className="h-[252px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle3_252x588.png"
                      alt="rectangleThree"
                    />
                    <div className="absolute bottom-[6%] flex flex-col gap-4 items-start justify-start left-[5%] w-auto">
                      <div className="flex flex-col items-center justify-start pr-0.5 pt-0.5 w-full">
                        <Text
                          className="text-5xl sm:text-[38px] md:text-[44px] text-gray-100"
                          size="txtRobotoBold48Gray100"
                        >
                          A Trip to Mountains
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[17px] items-center justify-start w-auto">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_ellipse2.png"
                          alt="ellipseTwo"
                        />
                        <Text
                          className="text-2xl md:text-[22px] text-gray-100 sm:text-xl w-auto"
                          size="txtRobotoRegular24Gray100"
                        >
                          John Barker
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[252px] my-0 relative w-full">
                    <Img
                      className="h-[252px] m-auto object-cover rounded-[16px] w-full"
                      src="images/img_rectangle4_252x587.png"
                      alt="rectangleFour"
                    />
                    <div className="absolute bottom-[12%] flex flex-col gap-4 items-start justify-start left-[5%] w-auto">
                      <div className="flex flex-col items-center justify-start pr-0.5 pt-0.5 w-full">
                        <Text
                          className="text-5xl sm:text-[38px] md:text-[44px] text-gray-100"
                          size="txtRobotoBold48Gray100"
                        >
                          A Trip to Mountains
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[17px] items-center justify-start w-auto">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_ellipse2.png"
                          alt="ellipseTwo"
                        />
                        <Text
                          className="text-2xl md:text-[22px] text-gray-100 sm:text-xl w-auto"
                          size="txtRobotoRegular24Gray100"
                        >
                          John Barker
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start justify-end max-w-[1200px] mt-14 mx-auto md:px-5 w-full">
          <div className="flex flex-row md:gap-10 h-10 md:h-auto items-center justify-between max-w-[1200px] w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img className="h-8 w-8" src="images/img_ifood.svg" alt="ifood" />
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                size="txtRobotoBold32"
              >
                Food
              </Text>
            </div>
            <Text
              className="bg-gray-100 h-9 justify-center px-4 py-[3px] rounded-[16px] text-2xl md:text-[22px] text-cyan-700 text-shadow-ts sm:text-xl w-auto"
              size="txtRobotoRegular24Cyan700"
            >
              <Link to="webexploremore">Explore More &gt;</Link>
            </Text>
          </div>
          <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-start w-auto md:w-full">
            <div className="h-[544px] relative w-full">
              <Img
                className="h-[544px] m-auto object-cover rounded-[16px] w-full"
                src="images/img_rectangle6_544x384.png"
                alt="rectangleSix_One"
              />
              <div className="absolute bottom-[5%] flex flex-col items-center justify-start left-[8%]">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-gray-100"
                  size="txtRobotoBold48Gray100"
                >
                  <Link to="webfoodarticle">
                    Best
                    <br />
                    Recipes
                  </Link>
                </Text>
              </div>
            </div>
            <div className="h-[544px] relative w-full">
              <Img
                className="h-[544px] m-auto object-cover rounded-[16px] w-full"
                src="images/img_rectangle7_544x384.png"
                alt="rectangleSeven"
              />
              <div className="absolute bottom-[7%] flex flex-col items-start justify-start left-[8%]">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-gray-100"
                  size="txtRobotoBold48Gray100"
                >
                  <Link to="webfoodarticle">Drinks</Link>
                </Text>
              </div>
            </div>
            <div className="h-[544px] relative w-full">
              <Img
                className="h-[544px] m-auto object-cover rounded-[16px] w-full"
                src="images/img_rectangle8_544x384.png"
                alt="rectangleEight"
              />
              <div className="absolute bottom-[6%] flex flex-col items-start justify-start left-[8%] pr-0.5 pt-0.5">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-gray-100"
                  size="txtRobotoBold48Gray100"
                >
                  <Link to="webfoodarticle">Baking</Link>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start justify-start max-w-[1200px] mt-20 mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-6 h-10 md:h-auto items-center justify-between w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-8 w-8"
                src="images/img_imoney.svg"
                alt="imoney"
              />
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-center text-cyan-700 w-auto"
                size="txtRobotoBold32"
              >
                Money
              </Text>
            </div>
            <Text
              className="bg-gray-100 h-9 justify-center px-4 py-[3px] rounded-[16px] text-2xl md:text-[22px] text-cyan-700 text-shadow-ts sm:text-xl w-auto"
              size="txtRobotoRegular24Cyan700"
            >
              <Link to="webexploremore">Explore More &gt;</Link>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1200px] w-full">
            <div className="bg-gray-100 flex sm:flex-1 flex-col gap-4 h-[600px] md:h-auto items-center justify-start p-4 rounded-[16px] shadow-bs w-[588px] sm:w-full">
              <Img
                className="h-[400px] md:h-auto object-cover rounded-[16px] w-full"
                src="images/img_rectangle2.png"
                alt="rectangleTwo_Five"
              />
              <div className="flex flex-col gap-4 h-full items-start justify-center w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                    size="txtRobotoBold24"
                  >
                    Autobiographies that can convert you into non fiction stan.
                  </Text>
                </div>
                <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_ellipse2.png"
                      alt="ellipseTwo_Four"
                    />
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtRobotoRegular20Gray900"
                    >
                      John Barker
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
            <List
              className="flex flex-col gap-6 h-[600px] items-center w-[588px]"
              orientation="vertical"
            >
              <div className="bg-gray-100 flex sm:flex-col flex-row gap-4 items-center justify-center my-0 p-4 rounded-[16px] shadow-bs w-full">
                <Img
                  className="h-36 md:h-auto object-cover rounded-[16px] w-36"
                  src="images/img_rectangle3.png"
                  alt="rectangleThree"
                />
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                      size="txtRobotoBold24"
                    >
                      A Peak into Earth Home mysteries by Pavan
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_ellipse2.png"
                        alt="ellipseTwo"
                      />
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtRobotoRegular20Gray900"
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
                        className="text-gray-900 text-xl w-auto"
                        size="txtRobotoRegular20Gray900"
                      >
                        1.8K
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 flex sm:flex-col flex-row gap-4 items-center justify-center my-0 p-4 rounded-[16px] shadow-bs w-full">
                <Img
                  className="h-36 md:h-auto object-cover rounded-[16px] w-36"
                  src="images/img_rectangle3.png"
                  alt="rectangleThree"
                />
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                      size="txtRobotoBold24"
                    >
                      A Peak into Earth Home mysteries by Pavan
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_ellipse2.png"
                        alt="ellipseTwo"
                      />
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtRobotoRegular20Gray900"
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
                        className="text-gray-900 text-xl w-auto"
                        size="txtRobotoRegular20Gray900"
                      >
                        1.8K
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 flex sm:flex-col flex-row gap-4 items-center justify-center my-0 p-4 rounded-[16px] shadow-bs w-full">
                <Img
                  className="h-36 md:h-auto object-cover rounded-[16px] w-36"
                  src="images/img_rectangle3.png"
                  alt="rectangleThree"
                />
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                      size="txtRobotoBold24"
                    >
                      A Peak into Earth Home mysteries by Pavan
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-[213px]">
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src="images/img_ellipse2.png"
                        alt="ellipseTwo"
                      />
                      <Text
                        className="text-gray-900 text-xl w-auto"
                        size="txtRobotoRegular20Gray900"
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
          </div>
        </div>
        <Footer className="bg-gray-900 flex items-center justify-center mt-20 md:px-5 w-full" />
      </div>
    </>
  );
};

export default WebHomePage;
