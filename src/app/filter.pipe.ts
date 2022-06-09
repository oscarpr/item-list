import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: string, keyValue: string = 'name'): any[] {
    return items.filter((item) => item[keyValue].includes(filter));
  }
}
