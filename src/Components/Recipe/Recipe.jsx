import PropTypes from "prop-types";
import { CiClock2 } from "react-icons/ci";
import { RiFireLine } from "react-icons/ri";
const Recipe = ({ recipe, handleAddCook }) => {
  const {
    recipe_name,
    recipe_img,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;


//   console.log(ingredients);

  return (
    <div className="p-6 border-2 rounded-xl space-y-4 hover:shadow-2xl duration-300 ">
      <div className="flex justify-center">
        <img className="w-full rounded-xl " src={recipe_img} alt="" />
      </div>
      <h3 className="text-[#282828] font-semibold text-xl">{recipe_name}</h3>
      <p className="text-base fira-sans text-[#878787] border-b-2 border-[#2828281A] pb-4">{short_description}</p>
      {/* ingredients */}
      <div className="pb-4 border-b-2 border-[#2828281A]">
        <p className="pb-2 font-medium text-[18px]">Ingredients: {ingredients.length}</p>
        {
            ingredients.map((ingredient, idx) => <li className="text-[#878787] font-normal fira-sans" key={idx}>{ingredient}</li>)
        }
      </div>

        <ul className="flex items-center gap-4">
            <li className="text-[#282828CC] text-base fira-sans flex justify-center items-center gap-2">
                <span className="text-xl"><CiClock2></CiClock2></span>
                 <p>{preparing_time} minutes</p>
                 </li>
                 <li className="text-[#282828CC] text-base fira-sans flex justify-center items-center gap-2">
                <span className="text-xl"><RiFireLine></RiFireLine></span>
                 <p>{calories} calories</p>
                 </li>
        </ul>
        <button onClick={() => handleAddCook(recipe )} className="text-[18px] font-medium px-5 py-3 rounded-full bg-[#0BE58A] text-[#150B2B] hover:text-[#0BE58A] hover:bg-[#150B2B] duration-300">Want to Cook</button>

    </div>
  );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleAddCook: PropTypes.func
};

export default Recipe;
