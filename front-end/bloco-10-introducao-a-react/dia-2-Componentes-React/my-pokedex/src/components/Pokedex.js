import React from "react";
import Data from "../Data";
import Pokemon from "./Pokemon";


class Pokedex extends React.Component {
    render() {
        return (
            <section className="pokemonContainer">
                <h1>Pokedex</h1>
                { Data.map((poke) => {
                    const { id, name, type, averageWeight, image } = poke;
                    return <Pokemon key={id} name={name} type={type} averageWeight={averageWeight} image={image}/>
                }) }
            </section>
        )
    }
}

export default Pokedex;