import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-searcher',
  templateUrl: './pokemon-searcher.component.html',
  styleUrls: ['./pokemon-searcher.component.scss'],
})
export class PokemonSearcherComponent implements OnInit {
  @Output()
  onValueChange: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
