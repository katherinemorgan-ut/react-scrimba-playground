import Anthropic from "@anthropic-ai/sdk"

const SYSTEM_PROMPT = `You are an assistant that is sourcing recipes from a given list of ingredients.
You will suggest a recipe that contains some or all of the ingredients, and you may include up to 3 
additional ingredients as well. Return the suggested recipe in markdown to make it easier to render
in the webpage.`

const anthropic = new Anthropic({
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true,
})

export async function getRecipeFromChefClaude(ingredientsArray) {
    const ingredientsStr = ingredientsArray.join(", ")
    let msg = "";
    
    try {
        msg = await anthropic.messages.create({
            model: 'claude-3-haiku-20240307',
            max_tokens: 1024,
            system: SYSTEM_PROMPT,
            messages: [
                {role: 'user',
                content: `I have ${ingredientsStr}. Please give me a recipe I can make!`,}
            ]
        })
    } catch(error) {
        console.error(error.message)
    }
    
    return msg.content[0].text
}