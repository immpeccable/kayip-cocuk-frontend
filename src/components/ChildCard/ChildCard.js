import React from "react";
import ChildPhoto from "../../images/demo-child-photo.jpeg";
import { LoremIpsum } from "lorem-ipsum";

export const ChildCard = ({
  name,
  surname,
  photo,
  description,
  age,
  city,
  district,
  phone,
}) => {
  function parsePhoneNumber() {
    return phone.slice(0, 4);
  }
  return (
    <div className="flex flex-col border-2 border-gray-500 rounded-md">
      <img src={ChildPhoto} alt="child-photo-not-found" />
      <div className="p-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl font-bold text-red-400">
            {name} {surname}/{age}
          </h1>
          <h1 className="text-xl font-bold text-red-400">
            {city}/{district}
          </h1>
        </div>
        <p className="mt-4">
          {
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi"
          }
        </p>
        <section>
          <h2>İletişim: {}</h2>
        </section>
      </div>
      <div></div>
    </div>
  );
};
