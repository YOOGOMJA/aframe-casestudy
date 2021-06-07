import React from "react";

const Floor = () => {
  return (
    <a-plane
      position='0 0 8'
      rotation='-90 0 0'
      color='gray'
      width='50'
      height='50'
      ammo-body='type: static; mass: 0;'
      ammo-shape='type: box;'
    />
  );
};

export default Floor;
