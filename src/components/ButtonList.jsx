import React from "react";
import Button from "./Button";

const Lists = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cooking",
  "Cricket",
  "Podcasts",
];
const ButtonList = () => {
  return (
    <div className="flex flex-wrap">
      {Lists.map((btnName, index) => (
        <Button key={index} name={btnName} />
      ))}
    </div>
  );
};

export default ButtonList;
