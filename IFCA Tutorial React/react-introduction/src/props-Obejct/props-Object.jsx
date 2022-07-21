//import json
import pokeJson from "../pokemonAPI/testPokemon.json";
import person from "../testJSON/example.json";
//testing fetch data api
console.log(person.human.name);

//global const
const namesPoke = pokeJson.abilities[0].ability.name;
const personNames = person.human.name;

const Car = (props) => {
    return (
        <>
            {/* <p>you have {props.model.name} and {props.model.mustang}</p> */}
            <p>live in {props.City}</p>
        </>
    );
};

const PokeBall = (props) => {
    const pokemon = pokeJson.abilities[0];

    return (
        <>
            <h1>
                my friends {props.namesPerson} has pokewball with names{" "}
                {props.namesPoke}{" "}
            </h1>
        </>
    );
};

const Garage = () => {
    const carInfo = { name: "Ford", model: "mustang" };
    const cityInfo = ["jakarta", "bogor", "depok"];

    return (
        <>
            <h3>
                I have {carInfo.name} with model {carInfo.model}
            </h3>
            <Car City={cityInfo[0]} carInfo="test" />
            <PokeBall namesPoke={namesPoke} namesPerson={personNames} />
        </>
    );
};

export default Garage;
