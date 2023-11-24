import React, { useState } from "react";
import Alexa from "../../Photos/Alexa.jpg";
import Stars from "../ProductComponents/Stars.jsx";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";
import ScrollTrigger from "react-scroll-trigger";
const ReviewsCard = () => {
  const [OnEnter, SetEnter] = useState(false);
  return (
    <div
      className={
        "border border-sky-600 rounded-2xl  col-span-3 md:col-span-1 mt-14"
      }
    >
      <ScrollTrigger
        onEnter={() => {
          SetEnter(true);
        }}
      >
        <div className={"flex items-center flex-col"}>
          <img
            src={Alexa}
            alt="Alexa Review"
            className={
              "h-[130px] w-[130px] object-contain rounded-[150px] -translate-y-1/2 absolute"
            }
          />
          <p className={"mt-20 font-medium text-lg"}>Alexa</p>
          <Stars rating={5} />
          <div className={"mt-6 w-full px-5"}>
            <RiDoubleQuotesL className={"text-2xl items-start"} />
            <p className={"text-justify my-2"}>
              {OnEnter && (
                <TypeAnimation
                  sequence={[
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,\n" +
                      "          odit omnis provident repellendus rerum ullam.",
                    2000,
                  ]}
                  speed={50}
                  cursor={false}
                />
              )}
            </p>
            <RiDoubleQuotesR className={"text-2xl ms-auto"} />
          </div>
          <p className={"mb-2 font-medium"}>21 June 2023</p>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default ReviewsCard;
