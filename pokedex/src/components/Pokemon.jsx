import { useEffect, useState } from "react";

const Pokemon = ({ pokemon }) => {
  const [types, setTypes] = useState([]);
  const [img, setImg] = useState("");

  // Setter første bokstav til stor bokstav
  const firstLetterUpperCase = (word) => {
    let first = word.slice(0, 1);
    let rest = word.slice(1, word.length);
    const upperedWord = `${first.toUpperCase()}${rest}`;
    return upperedWord;
  };

  const getPokemonImg = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setImg(data.sprites.front_default);
  };

  const getPokemonTypes = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setTypes(data.types);
  };

  useEffect(() => {
    getPokemonImg(pokemon.url);
  }, [pokemon.url]);

  return (
    <li className="pokemon">
      <h2>{firstLetterUpperCase(pokemon.name)}</h2>
      <img src={img} alt="pokemon" />
      <p>
        <a href={pokemon.url} target="_blank" rel="noreferrer">
          More about {firstLetterUpperCase(pokemon.name)}
        </a>
      </p>
      <button onClick={() => getPokemonTypes(pokemon.url)}>
        What type is {firstLetterUpperCase(pokemon.name)}?
      </button>
      <section>
        {types.map((type) => {
          return (
            <p key={type.type.name}>{firstLetterUpperCase(type.type.name)}</p>
          );
        })}
      </section>
    </li>
  );
};
export default Pokemon;
