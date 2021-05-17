import { Pipe, PipeTransform } from '@angular/core';

import { UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'primapipe'
})
export class PrimapipePipe implements PipeTransform {

  transform(value: string, attiva:boolean): string {

if (!attiva){
  
  console.log('falso')
}else{
  value= this.prima.transform(value);
console.log("vero")

}


console.log(value);
console.log(attiva);
    return value;

  }


constructor (private prima:UpperCasePipe)  {}

}
