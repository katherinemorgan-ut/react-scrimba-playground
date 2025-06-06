import React from "react"

function Main() {


    const [ingredients, setIngredients] = React.useState([])


    const ingredientsMap = ingredients.map(ingredient => {
        return (
            <li>{ingredient}</li>
        )
    })

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        if(newIngredient !== "") {
            setIngredients(ingredients => [...ingredients, newIngredient])
        }
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input aria-label="Add Ingredient"
                 placeholder="Oregano"
                    type="text" 
                    name="ingredient"/>
                    
                <button>Add Ingredient</button>

            </form>

            <ul>
                {ingredientsMap }
            </ul>


        </main>
    )
}

export default Main