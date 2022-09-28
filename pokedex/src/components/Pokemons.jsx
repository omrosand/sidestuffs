import Pokemon from "./Pokemon";

const Pokemons = ({ pokemons }) => {
  return (
    <>
      <ul>
        {pokemons?.length > 0
          ? pokemons.map((pokemon) => {
              return <Pokemon key={pokemon.name} pokemon={pokemon} />;
            })
          : null}
      </ul>
    </>
  );
};

export default Pokemons;
