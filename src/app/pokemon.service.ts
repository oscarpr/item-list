import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon, PokemonResponse } from './interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly URL = `${environment.BASE_URL}pokemon?limit=151`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(this.URL);
  }
}
