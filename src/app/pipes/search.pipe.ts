import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any, colName:any): any {
    if(!value) return null;
    if(!args) return value;

      args= args.toLowerCase();
      return value.filter(function(item){
        return item[colName].toLowerCase().includes(args);
      });
  }

}
