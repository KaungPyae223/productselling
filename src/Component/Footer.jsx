import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
const Footer = () => {
  return (
    <div className={"mt-12 w-full bg-gray-950"}>
      <div className={"md:w-4/5 pt-12 mx-5 md:mx-auto"}>
        <div className={"flex flex-wrap items-start"}>
          <div className={"md:w-1/2"}>
            <p className={"text-3xl font-bold text-blue-500"}>Grab & Go</p>
            <div className={"text-white"}>
              <p className={"mt-6 text-xl font-medium"}>About Us</p>
              <p className={"mt-3 w-4/5 text-sm text-neutral-400"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                aperiam atque facere natus obcaecati odio officiis possimus quam
                tempore vero.
              </p>
              <div className={"mt-6 flex flex-row gap-6 items-center"}>
                <p className={"text-xl font-medium"}>Follow Us</p>
                <div className={"flex flex-row gap-4 text-2xl"}>
                  <FaFacebookF />
                  <FaInstagram />
                  <CiTwitter />
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              "md:w-1/2 gap-14 md:gap-0 mt-8 md:mt-0 text-white flex flex-row justify-between md:justify-evenly md:items-start"
            }
          >
            <div>
              <p className={"text-xl font-semibold"}>Services</p>
              <div className={"mt-6 text-neutral-400 flex flex-col gap-2"}>
                <p>Online Order</p>
                <p>24/7 Customer Service</p>
                <p>14 Days Easy Return</p>
                <p>Free Delivery</p>
              </div>
            </div>
            <div>
              <p className={"text-xl font-semibold"}>Quick Link</p>
              <div className={"mt-6 text-neutral-400 flex flex-col gap-2"}>
                <p>Shop</p>
                <p>Contact Us</p>
                <p>About</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"w-full mt-8 border-t border-t-neutral-500"}>
        <div className={"md:w-4/5 mx-5 md:mx-auto py-3 text-white"}>
          <p className={"w-fit ms-auto "}>
            2023 © Grab&Go | All Right Reversed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
