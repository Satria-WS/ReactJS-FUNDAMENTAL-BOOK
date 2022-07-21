//using nodemon for test
var someObject = require("./example.json");
var testPoke = require("../pokemonAPI/testPokemon.json");

//console.log("hello");
//console.log(someObject);
const limberPokemon = testPoke.abilities[0];
console.log(limberPokemon.ability.name);
