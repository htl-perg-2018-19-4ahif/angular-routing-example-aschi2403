import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IPokemon{
  name: string,
  url: string,
  id?: number
}

interface IPokemonList{
  count: number,
  next: string,
  previous: string,
  results: IPokemon[]
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonList: IPokemon[];

  constructor(private http: HttpClient){
  }

  ngOnInit() {
  }

  async loadPokemonList(){
    let pokemonResult: IPokemonList =  await this.http.get<IPokemonList>('https://pokeapi.co/api/v2/pokemon').toPromise();
    
    

    this.pokemonList = pokemonResult.results;
  }
}
