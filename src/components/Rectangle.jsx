import React from "react";

export default (props) => {
  return <div
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.color,
      }}
    ></div>;
};
