const pokemonDetailslist = document.getElementById('pokemonsDetailslist');
const loadDetails = document.getElementById('loadMoreDetails');
const back = document.getElementById('back');
const maxRecord = 151;
const limit = 4;
let offset = 0;

function loadPokemonDetail(offset,limit){
    pokeApi.getPokemons(offset,limit).then((pokemons =[])=> {
        pokemonDetailslist.innerHTML+=pokemons.map((pokemon)=>
        `
        <div class="pokemonDetails">
            <li class="pokemonListDetails">
                <span class="number">#0${pokemon.number}</span><br>
                <span class="nomePokemon">${pokemon.name}</span>
                
                <div class="typesaAndImg">
                    <ol class="types">
                        ${pokemon.types.map((type)=> `<li class="typePokemon">${type}</li>`).join('')}    
                     
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        
    
            <div class="characteristicsPokemon">
                <div class="description">
                    <ul class="descriptionList">
                        
                        
                        <li>Experience:  </li>
                        <li>Height:  </li>
                        <li>Weight:  </li>
                        <li>Ability:  </li>
                        
                    </ul>
                </div>
                <div class="description">
                    <ul class="descriptionList">
                        
                    
                        <li>${pokemon.height}</li>
                        <li>${pokemon.weight}</li>
                        <li>${pokemon.experience}</li>
                        <li>${pokemon.ability}</li>
                
                    </ul>
                </div>
            </div>
        </div>
    
    `
            
        ).join('');
        
    })
}

loadPokemonDetail(offset,limit)

loadDetails.addEventListener('click',() => {

    offset += limit;
    const qtdRecordNextPage = offset + limit;

    if(qtdRecordNextPage>=maxRecord){
        const newLimit = maxRecord - offset;
        loadPokemonDetail(offset,limit)
        buttonLoadMore.parentElement.removeChild(loadDetails)

    } else{
        loadPokemonDetail(offset,limit)
    }
    
})

back.addEventListener('click',()=>{
    window.location='index.html'
})