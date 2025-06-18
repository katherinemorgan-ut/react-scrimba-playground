import React from "react"

import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsMap from "./IngredientsList"
import { getRecipeFromChefClaude } from "../ai"

function Main() {


    const [ingredients, setIngredients] = React.useState( [])

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        if(newIngredient !== "") {
            setIngredients(ingredients => [...ingredients, newIngredient])
        }
    }

    let [ recipe, setClaudeRecipe ] = React.useState("")

    // Use the onClick fxn to set both State variables 
    async function getRecipe(){

            const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
            
            setClaudeRecipe(recipeMarkdown);

    }
    
    

    return (
        <>
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient" />
                <button>Add ingredient</button>
            </form>
            {ingredients.length !== 0 && <section>
                <IngredientsMap userIngredients={ingredients} getRecipe={getRecipe} />
            </section>}
        </main>
        {recipe && <ClaudeRecipe recipe={recipe}/>}
        </>
    )
}

export default Main