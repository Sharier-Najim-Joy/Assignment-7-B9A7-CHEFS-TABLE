

import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';
import PreparedCook from '../PaperedCook/PreparedCook';



const Recipes = () => {
    
    const [recipes, setRecipes] = useState([])
    const [preparedCook, setPreparedCook] = useState([]);
    const [cooking,setCooking]=useState([])
  
    // fetch json data load
    useEffect(() => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])

    // cart click to add button
    const handleAddCook = (cook) =>{
        const newCart = preparedCook.find(item => item.recipe_id === cook.recipe_id)
        console.log(newCart);
        if(!newCart){
            setPreparedCook([...preparedCook, cook])
        }else{ 
            toast.error("Already Exist")
        }
    }

    // preparing btn to add cooking part
    const handlePreparing = (id) =>{
        const cookExist = preparedCook.filter(item => item.recipe_id != id.recipe_id)
        setCooking([...cooking,id])
        
            setPreparedCook(cookExist);
     
       
    }
//    console.log(preparedCook);
//    console.log(cooking);
    

    return (
        <main className='container mx-auto px-2 lg:px-6 my-16'>
            
            <section>
                {/* section container */}
                <div className='w-full lg:w-3/5 mx-auto text-center space-y-4'>
                    <h3 className='text-[#150B2B] font-semibold text-[32px] md:text-[40px]'>Our Recipes</h3>
                    <p className='text-[#150B2B99] text-base font-normal'>Recipe for a simple tomato bruschetta. Dice ripe tomatoes, mix with minced garlic, olive oil, basil, salt, and pepper. Spoon onto toasted baguette slices. Serve fresh. Enjoy!</p>
                </div>

                {/* recipe div */}
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-y-6 lg:gap-6 mt-8'>
                    <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {
                            recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} handleAddCook={handleAddCook}></Recipe>)
                            }
                    </div>
                    <div className='col-span-1'>
                    <PreparedCook cooking={cooking} cook={preparedCook} handlePreparing={handlePreparing}></PreparedCook>
                    </div>
                </div>
            </section>
        </main>
    );
};


export default Recipes;