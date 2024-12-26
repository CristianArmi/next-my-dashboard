import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemons";
import { space } from "postcss/lib/list";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export function PokemonGrid({ pokemons }: Props) {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon, index) => (
        // <article key={index}>
        //   <Image
        //     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        //     width={100}
        //     height={100}
        //     alt={pokemon.name}
        //   />
        // </article>
        <PokemonCard key={index} pokemon={pokemon}/>
      ))}
    </div>
  );
}
