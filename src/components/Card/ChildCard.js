import React from "react";

export const ChildCard = ({ name, surname, photo, description, age }) => {
  return (
    <div className="flex flex-col">
      <img src={photo} alt="child-photo-not-found" />
      <div className="p-2">
        <h1>
          {name} {surname}
        </h1>
        <p>{description}</p>
      </div>
      <div></div>
    </div>
  );
};
