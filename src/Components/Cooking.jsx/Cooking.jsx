import PropTypes from 'prop-types'
const Cooking = ({cook, idx}) => {
    console.log(cook);
    const {recipe_name, preparing_time, calories } = cook
    return (
        <div>
            <div className="grid grid-cols-12 p-4 text-center">
        <h4 className='col-span-1 fira-sans font-normal text-base text-[#282828B3]'>{idx+1}</h4>
        <h4 className="col-span-4 fira-sans font-normal text-base text-[#282828B3]">{recipe_name}</h4>
        <h4 className="col-span-3 fira-sans font-normal text-base text-[#282828B3]">{preparing_time} minutes</h4>
        <h4 className="col-span-3 fira-sans font-normal text-base text-[#282828B3]">{calories} calories</h4>
      </div>
      
        </div>
    );
};

Cooking.propTypes = {
    cook: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired
}

export default Cooking;