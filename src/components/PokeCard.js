import React from "react";
import { mockPokemonData } from "../mock/pokeData";

const PokeCard = () => {
  return (
    <div className="col">
      <h1 className="name">{mockPokemonData.name}</h1>
      <div className="row">
        <img src={mockPokemonData.sprites.front_default} alt="Default Sprite" />
        <img src={mockPokemonData.sprites.front_shiny} alt="Shiny Sprite" />
      </div>
      <a href={mockPokemonData.video} target="blank">
        See Video
      </a>
    </div>
  );
};

export default PokeCard;
