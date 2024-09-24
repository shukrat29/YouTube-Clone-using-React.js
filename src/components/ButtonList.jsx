import React from "react";
import Button from "./Button";

// const Lists = ["All", "Gaming", "Songs", "Live"]
const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Cooking" />
      <Button name="Cricket" />
      <Button name="Podcasts" />
      <Button name="Pop Songs" />
      <Button name="Iformation technology" />
    </div>
  );
};

export default ButtonList;
