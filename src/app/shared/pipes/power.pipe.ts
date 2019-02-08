// power.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {
  // {{ 2 | power: 3}}
  // first arg (2)
  // second/third,... after colon : 
  transform(value: number, exponent: number = 1): number {
    return Math.pow(value, exponent);
  }

}
