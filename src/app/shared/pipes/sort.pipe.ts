// sort.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';


// let product of (products | sort:'name':'asc')
// let brand of (brands | sort:'name')


@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[],
            fieldName: string,
            order: string = 'asc'): any[] {

    if ( !items || !fieldName) {
      return items;
    }

    return items.sort(function compare(left: any, right: any) {
      const ORDER: number = order === 'desc' ? -1 : 1;

      if (left[fieldName] < right[fieldName]) {
        return -ORDER;
      }

      if (left[fieldName] > right[fieldName]) {
        return ORDER;
      }

      return 0;
    });

  }

}
