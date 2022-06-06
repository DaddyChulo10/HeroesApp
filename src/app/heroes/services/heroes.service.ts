import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interfaces';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }
  getHeroes() {
    return this.http.get<Heroe[]>(this.baseUrl + '/heroes')
  }

  getHeroePorId(id: string) {
    return this.http.get<Heroe>(this.baseUrl + `/heroes/${id}`)
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.baseUrl + `/heroes/?q=${termino}&_limit=6`)
  }
}
