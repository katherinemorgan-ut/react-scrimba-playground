import Joke from "./components/joke";

/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 *
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 *
 * E.g.: "It’s hard to explain puns to kleptomaniacs because
 * they always take things literally."
 *
 * If you don't pass in a "question" prop, how might you make it only
 * show the punchline?
 */

function App() {
  return (
    <>
      <Joke 
        setup="Why is 6 afraid of 7?" 
        joke="Because 7 ate (8) 9!" />
      <Joke 
        setup="I got my daughter a fridge for her birthday." 
        joke="I can't wait to see her face light up when she opens it." />
      <Joke 
        setup=" Why do bees stay in the hive in the winter?" 
        joke="Swarm." />
      <Joke 
        setup=""
        joke="It’s hard to explain puns to kleptomaniacs because 
        they always take things literally."
      />
    </>
  );
}

export default App;
