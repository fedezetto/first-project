import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'terza'
})
export class TerzaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
