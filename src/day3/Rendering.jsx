import React from "react";

const DynamicRendering = () => {
  const arr = [
    "ReactJS",
    "AngularJS",
    "VueJS",
    "NextJS",
    "JavaScript",
    "NextJS",
  ];
  return (
    <>
      <ul>
        {arr.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </>
  );
};

export default DynamicRendering;
