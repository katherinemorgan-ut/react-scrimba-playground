function IngredientsMap(props) {

    const ingredientsMap = props.userIngredients.map(ingredient => {
        return (
            <li>{ingredient}</li>
            
        )
    })

    return (
        <>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsMap}</ul>
            <div className="get-recipe-container">
                    {props.userIngredients.length > 3 &&
                        <>
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button onClick={props.getRecipe}>Get a recipe</button>
                        </>}
                </div>
        </>
    )
}

export default IngredientsMap