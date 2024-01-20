const pokemonDetail = document.getElementById('pokemonDetail');

function showPokemon(pokemon) {
    return `
        <div class="content-detail ${pokemon.type}">
            <div class="pokemon-about">
                <h2>#${pokemon.number}</h2>
                <img src="${pokemon.photo}"
            alt="${pokemon.name}">
                <h2>${pokemon.name}</h2>
                <div class="info">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <p>Peso: ${pokemon.weight} kg</p>
                    <p>Altura: ${pokemon.height} m</p>

                    <p>Habilidades: </p>
                    <ul class="skills">
                        <li class="skill">HP: ${pokemon.baseStat[0]}</li>
                        <li class="skill">Attack: ${pokemon.baseStat[1]}</li>
                        <li class="skill">Defense: ${pokemon.baseStat[2]}</li>
                        <li class="skill">Special-Attack: ${pokemon.baseStat[3]}</li>
                        <li class="skill">Special-Defense: ${pokemon.baseStat[4]}</li>
                        <li class="skill">Speed: ${pokemon.baseStat[5]}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
}

const params = new URLSearchParams(window.location.search);

const pokemonName = params.get('name');

function loadPokemonDetail(name) {
    pokeApi.getPokemon(name)
        .then((pokemon) => {
            pokemonDetail.innerHTML = showPokemon(pokemon);
        })
}

loadPokemonDetail(pokemonName)