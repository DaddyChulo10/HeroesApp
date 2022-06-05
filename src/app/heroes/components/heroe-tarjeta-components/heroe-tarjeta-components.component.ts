import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-heroe-tarjeta-components',
  templateUrl: './heroe-tarjeta-components.component.html',
  styles: [
    `mat-card { margin-top: 25px; }`
  ]
})
export class HeroeTarjetaComponentsComponent {

  @Input() item !: Heroe;

}
