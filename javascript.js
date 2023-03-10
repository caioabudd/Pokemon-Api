
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return  `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
               
            </ol>
            <img src="https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png" alt="" height="">
        </div>
        <button onclick="abrirmodal()"class="btn">Ver dados</button>
    </li>

`

}

const pokemonList = document.getElementById('pokemonList')


pokeApi.getPokemons().then((pokemons) => {
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        pokemonList.innerHTML += convertPokemonToLi(pokemon)
    }
})

function abrirmodal() {

    let modal = document.querySelector('.modal')
    modal.style.display = 'block';


}

function fechar() {

    let modal = document.querySelector('.modal')
    modal.style.display = 'none';


}