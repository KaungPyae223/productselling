import React from "react";
import OurServicesCard from "./OurServicesCard.jsx";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";

const OurServices = () => {
  return (
    <div
      className={
        "md:w-4/5 mx-5 md:mx-auto grid grid-cols-3 gap-10 md:gap-3 mt-12"
      }
    >
      <OurServicesCard
        title={"Our Services"}
        icon={<TbTruckDelivery />}
        index={1}
      />
      <OurServicesCard
        title={"14 Days easy return"}
        icon={<MdOutlineAssignmentReturn />}
        index={2}
      />
      <OurServicesCard
        title={"24/7 Customer Support"}
        icon={<LuAlarmClock />}
        index={3}
      />
    </div>
  );
};

export default OurServices;
