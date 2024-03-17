
import PropTypes from 'prop-types';

const WantToCook = ({wantCook, idx, handlePreparing}) => {
    // console.log(wantCook);
    const {recipe_name, preparing_time, calories } = wantCook


    return (
        <div className='grid grid-cols-12 bg-[#28282808] p-4 text-center items-center'>
                <p className='col-span-1 fira-sans font-normal text-base text-[#282828B3]'>{idx+1}</p>
                <h4 className='col-span-3 fira-sans font-normal text-base lg:text-center text-left text-[#282828B3]'>{recipe_name}</h4>
                <h4 className='col-span-3 fira-sans font-normal text-base text-[#282828B3]'><span>{preparing_time}</span> <br /><span>minutes</span></h4>
                <h4 className='col-span-2 fira-sans font-normal text-base text-[#282828B3]'><span>{calories}</span> <br /><span>calories</span></h4>
                <button onClick={() => handlePreparing(wantCook)} className='col-span-3 px-2 py-1 bg-[#0BE58A] text-[#150B2B] font-medium text-base rounded-full hover:bg-[#150B2B] hover:text-[#0BE58A] duration-300'>Preparing</button>
        </div>
        
    );
};

WantToCook.propTypes = {
    wantCook: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
    handlePreparing: PropTypes.func
};

export default WantToCook;