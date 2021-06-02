import React from "react";

const Floor = () => {
  return (
    <a-plane
      static-body
      position='0 0 8'
      rotation='-90 0 0'
      color='gray'
      width='50'
      height='50'
    />
  );
};

export default Floor;
