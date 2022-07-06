import { Pipe, PipeTransform } from '@angular/core';
import { InteractionService } from '../services/interaction-service/interaction.service';

@Pipe({
  name: 'itemSearch'
})
export class ItemSearchPipe implements PipeTransform {

  constructor(private interactionService:InteractionService){}

  transform(value: any[], query: string): any {
    const result=[]
    if (query==='' || query===undefined ){
      return value
    }

    for (let item of value){
      if (item.name.toLowerCase().indexOf(query.toLowerCase())>-1){
        result.push(item)
        this.interactionService.changeItemSearch.emit(result)
      }
    }
    return result
  }

}
