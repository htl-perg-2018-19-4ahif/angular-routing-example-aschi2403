import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';


interface IPokemon{
  name: string,
  abilities: IAbility[]
}

interface IAbility{
  name: string,
  url: string
}

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: IPokemon;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getPokemon();
  }

  async getPokemon(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemon = await this.http.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`).toPromise();
    
  }
}
