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
  filterString: string = '';

  constructor(private http: HttpClient){
  }

  ngOnInit() {
  }

  async loadPokemonList(){
    let count = (await this.http.get<IPokemonList>('https://pokeapi.co/api/v2/pokemon/').toPromise()).count;
    let pokemonResult: IPokemonList =  (await this.http.get<IPokemonList>(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`).toPromise());
    this.pokemonList = pokemonResult.results;
  }


 /* filterResults(filterString: string){
    this.filterString = filterString;
    this.pokemonList.filter(this.containsString);
  }

  containsString(element: IPokemon, index, array){
    if(this.filterString === '')
      return true;

    if(element.name.includes(this.filterString))
      return true;
    else
      return false;
  }
  */
}
