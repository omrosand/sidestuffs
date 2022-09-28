import { useEffect, useState } from "react";

const Pokemon = ({ pokemon }) => {
  const [types, setTypes] = useState([]);
  const [img, setImg] = useState("");
  const [shiny, setShiny] = useState(false);

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

    if (shiny) {
      setImg(data.sprites.front_shiny);
      setShiny(false);
    } else {
      setImg(data.sprites.front_default);
      setShiny(true);
    }
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
      <img
        src={img}
        alt="pokemon"
        onMouseEnter={() => setShiny(true)}
        onMouseLeave={() => setShiny(false)}
      />
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
