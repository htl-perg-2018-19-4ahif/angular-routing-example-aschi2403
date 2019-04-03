import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IPokemon{
  name: string,
  url: string
}

interface IPokemonList{
  count: number,
  next: string,
  previous: string,
  results: IPokemon[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pokemonList: IPokemon[];

  constructor(private http: HttpClient){
  }
  
  
}
