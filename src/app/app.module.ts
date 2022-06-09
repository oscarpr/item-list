import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'projects/button/src/public-api';
import { CardModule } from 'projects/card/src/public-api';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonSearcherComponent } from './pokemon-searcher/pokemon-searcher.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, PokemonComponent, PokemonSearcherComponent, FilterPipe],
  imports: [BrowserModule, CardModule, ButtonModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
