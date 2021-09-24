import { Pipe, PipeTransform } from '@angular/core';
import { ThingsToDo } from './startbox';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {

  transform(value: ThingsToDo[], filterText?: string): ThingsToDo[] {
    // searchBox = searchBox ? searchBox.toLocaleLowerCase():null

    // return searchBox ? value.filter((t: ThingsToDo) => t.title
    // .toLocaleLowerCase().indexOf(searchBox) !== -1) : value;

    if(!filterText)
    {
      return value;
    }
    else
    {
      return value.filter((t:ThingsToDo) => t.title.toLocaleLowerCase()
      .indexOf(filterText.toLocaleLowerCase())!==-1)
    }
  }

  

}
