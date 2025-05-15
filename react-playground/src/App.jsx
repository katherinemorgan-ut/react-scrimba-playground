import Joke from "./components/Joke";
import jokesData from "./jokesData";

function App() {

  const jokeElements = jokesData.map( joke => {
    return <Joke 
      setup= {joke.setup}
      joke= {joke.punchline}

    />
  })

  console.log(jokeElements)

  return (
    <main>
      { jokeElements }
    </main>
  );
}

export default App;
