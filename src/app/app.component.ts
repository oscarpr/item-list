import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Pokemon } from './interfaces/pokemon';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  pokemons$: Observable<Pokemon[]> | null = null;
  searchValue: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemons();
  }

  private getPokemons() {
    this.pokemons$ = this.pokemonService
      .getAll()
      .pipe(map((pokemonResponse) => pokemonResponse.results));
  }
}
