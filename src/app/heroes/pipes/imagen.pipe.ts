import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: Heroe): string {
    const url = 'assets/heroes/' + value.id + '.jpg';
    return 'assets/heroes/' + value.id + '.jpg';
  }

}
