import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeropipe'
})
export class NumeropipePipe implements PipeTransform {

  transform (titolo: number): number {

if (titolo >=24) {

  console.log("maggiore");

}else if (titolo<=24) {

console.log("minore");

}

    return titolo;
  }

}
