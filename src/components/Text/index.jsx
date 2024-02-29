import React from "react";

const sizeClasses = {
  txtRobotoBold20Gray100: "font-bold font-roboto",
  txtRobotoBold32Gray900: "font-bold font-roboto",
  txtRobotoRegular24Cyan700: "font-normal font-roboto",
  txtRobotoBold32Gray100: "font-bold font-roboto",
  txtRobotoBold24Gray600: "font-bold font-roboto",
  txtRobotoRegular20Black900: "font-normal font-roboto",
  txtRobotoRegular24: "font-normal font-roboto",
  txtRobotoBold24WhiteA700: "font-bold font-roboto",
  txtRobotoBold48Black900: "font-bold font-roboto",
  txtRobotoBold48: "font-bold font-roboto",
  txtRobotoBold24: "font-bold font-roboto",
  txtRobotoRegular20: "font-normal font-roboto",
  txtRobotoBold20: "font-bold font-roboto",
  txtRobotoRegular20Gray900: "font-normal font-roboto",
  txtRobotoBold48Cyan700: "font-bold font-roboto",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular24Gray100: "font-normal font-roboto",
  txtRobotoRegular16Gray600: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoBold24Cyan700: "font-bold font-roboto",
  txtRobotoBold48Gray100: "font-bold font-roboto",
  txtRobotoRegular24Gray900: "font-normal font-roboto",
  txtRobotoBold20Cyan700: "font-bold font-roboto",
  txtRobotoRegular20Gray600: "font-normal font-roboto",
  txtRobotoBold48Gray900: "font-bold font-roboto",
  txtRobotoBold32: "font-bold font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
