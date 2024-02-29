import React from "react";
import { default as ModalProvider } from "react-modal";

import { Text } from "components";
import WebWebStoriesOpenStories from "components/WebWebStoriesOpenStories";

const WebWebStoriesOpenModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-1/4"
      overlayClassName="bg-gray-900_99 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <WebWebStoriesOpenStories
          className="bg-cover bg-gradient  bg-no-repeat flex flex-col md:gap-10 gap-[659px] h-[800px] justify-start p-2 md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_stories.png')" }}
        />
      </div>
    </ModalProvider>
  );
};

export default WebWebStoriesOpenModal;
