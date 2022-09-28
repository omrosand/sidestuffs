import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Pokemons from "./components/Pokemons";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const data = await response.json();
    setPokemons(data?.results);
  };

  // Henter pokemons når komponenten mountes.
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Layout className="App">
      <h1>Pokédex</h1>
      <Pokemons pokemons={pokemons} />
    </Layout>
  );
}

export default App;
