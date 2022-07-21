
import pokeJson from "../pokemonAPI/testPokemon.json";

const Car = (props) => {
    return (
        <>
            {/* <p>you have {props.model.name} and {props.model.mustang}</p> */}
            <p>live in {props.City}</p>
        </>
    );
};

function test() {
    const pokeVariable = pokeJson;
    //const pokeJson = JSON.parse(pokeVariable);
    console.log("hello");
    console.log(pokeVariable);
}
test();

const Garage = () => {
    const carInfo = { name: "Ford", model: "mustang" };
    const cityInfo = ["jakarta", "bogor", "depok"];
    // const pokemon = {};
    return (
        <>
            <h3>
                I have {carInfo.name} with model {carInfo.model}
            </h3>
            <Car City={cityInfo[0]} carInfo="test" />
        </>
    );
};

export default Garage;
