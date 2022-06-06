import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = "";
  heroes: Heroe[] = [];
  heroeSeleccionado : Heroe | undefined;
  constructor(private heoreService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando() {
    this.heoreService.getSugerencias(this.termino.trim()).subscribe(data => this.heroes = data);
  }
  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {

    if(!event.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroe = event.option.value
    this.termino = heroe.superhero;
    this.heoreService.getHeroePorId(heroe.id!).subscribe(data => this.heroeSeleccionado = data);
  }

}
