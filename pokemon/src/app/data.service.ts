import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonSpecies } from './PokemonSpecies';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl= 'https://pokeapi.co/api/v2/pokemon-species/';

  constructor(private http: HttpClient) {

    }

  getPokemon() {
    var pokemonSpeciesObservable = this.http.get<PokemonSpecies>(this.apiUrl + '88');

    // to make sure it works

    pokemonSpeciesObservable.subscribe(pokemonValue => {
     console.log(pokemonValue.id);
    })
  }
}

// // making this class available elsewhere by exporting
// export class DataService {
//   //this sets the api's url to the variable apiUrl (which must've been created somewhere else)
//   apiUrl= 'https://pokeapi.co/api/v2/pokemon-species/';

//   // creating the http data service
//   constructor(private http: HttpClient) {

//     }

//   // This is the getPokemon function that will be used to consume the api endpoint
//   getPokemon() {
//     /* sets the variable by making an http request to the api endpoint with the parameter
//        of the hardcoded string '88' which I assume is tied to a speciesID on the api's database
//     */
//     var pokemonSpeciesObservable = this.http.get<PokemonSpecies>(this.apiUrl + '88');

//     // to make sure it works

//     // Makes the actual call to the api...I'm missing some code so I cant completely see what's going on
//     pokemonSpeciesObservable.subscribe(pokemonValue => {
//      console.log(pokemonValue.id);
//     })
//   }
