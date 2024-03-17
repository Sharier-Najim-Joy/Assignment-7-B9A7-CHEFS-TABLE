import PropTypes from "prop-types";
import WantToCook from "../WantToCook/WantToCook";
import Cooking from "../Cooking.jsx/Cooking";

const PreparedCook = ({ cook, handlePreparing, cooking }) => {
  // console.log(cooking);
  return (
    <div className="border-2 rounded-xl">
      <div className="p-8 text-center">
        <h3 className="text-[24px] text-[#282828] font-semibold pb-4 border-b-2 border-[#2828281A]">
          Want to Cook: {cook.length}
        </h3>
      </div>

      <div className="grid grid-cols-12 p-2 text-center mb-4">
        <h4 className="col-span-4 fira-sans font-medium text-base text-[#878787]">Name</h4>
        <h4 className="col-span-3 fira-sans font-medium text-base text-[#878787]">Time</h4>
        <h4 className="col-span-2 fira-sans font-medium text-base text-[#878787]">Calories</h4>
      </div>
      {cook.map((wantCook, idx) => (
        <WantToCook
          key={idx}
          idx={idx}
          wantCook={wantCook}
          handlePreparing={handlePreparing}
        ></WantToCook>
      ))}
      {/* current cooking */}

      <div className="p-8 text-center">
        <h3 className="text-[24px] text-[#282828] font-semibold pb-4 border-b-2 border-[#2828281A]">
          Currently Cooking: {cooking.length}
        </h3>
      </div>
      <div className="grid grid-cols-12 p-2 text-center mb-4">
        <h4 className="col-span-5 fira-sans font-medium text-base text-[#878787]">Name</h4>
        <h4 className="col-span-3 fira-sans font-medium text-base text-[#878787]">Time</h4>
        <h4 className="col-span-2 fira-sans font-medium text-base text-[#878787]">Calories</h4>
      </div>
      <div className="text-center bg-[#28282808] mb-4">
        {cooking.map((cook, idx) => (
          <Cooking key={idx} cook={cook} idx={idx}></Cooking>
        ))}
      </div>
      <div className="p-4 flex justify-end items-center gap-8">
      <h3 className="text-[#282828CC] font-medium text-base">
          <span>Total Time =</span> <br /> {cooking.reduce((sumTime, cook) => sumTime + cook.preparing_time, 0)} minutes
      </h3>
      <h3 className="text-[#282828CC] font-medium text-base">
          <span>Total Calories = </span> <br />{cooking.reduce((sumCalories, cook) => sumCalories + cook.calories, 0)} calories
        </h3>
        
      </div>
    </div>
  );
};

PreparedCook.propTypes = {
  cook: PropTypes.object.isRequired,
  cooking: PropTypes.object.isRequired,
  handlePreparing: PropTypes.func
};

export default PreparedCook;
