import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import { BiCalendar } from "react-icons/bi";

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false);
  return (
    <div className="relative flex items-center justify-end h-full">
      <div>
        <div>
          <BiCalendar className="text-black text-base" />
        </div>
      </div>
      <DatePicker
        className="w-full h-full"
        selected={endDate}
        placeholderText="check out"
        onChange={(date) => setEndDate(date)}
      />
    </div>
  );
};

export default CheckOut;
