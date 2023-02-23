import React from "react";
import CheckIn from "../Dropdown/CheckIn";
import CheckOut from "../Dropdown/CheckOut";
import KidsDropdown from "../Dropdown/KidsDropdown";
import AdultsDropdown from "../Dropdown/AdultsDropdown";

const BookForm = () => {
  return (
    <form className="h-[300px]  w-full lg:h-[70px]">
      {/* <div className="flex flex-col w-full h-full lg:flex-row"> */}
      <div className="flex  grid-cols-3 gap-3">
        <div className="flex border-r">
          <CheckIn />
          <div className="flex">
            <CheckOut />
          </div>
        </div>

        <div className="flex-1 border-r">
          <AdultsDropdown />
        </div>
        <div className="flex-1 border-r">special code</div>
        {/* <div className="flex-1 border-r">
          <KidsDropdown />
        </div> */}
      </div>
    </form>
  );
};

export default BookForm;
