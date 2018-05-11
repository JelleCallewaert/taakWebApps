import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usedDoelgroepFilter'
})
export class UsedDoelgroepFilterPipe implements PipeTransform {

  transform(doelgroepen: string[], usedDoelgroepen: string[]): string[] {
    if(!usedDoelgroepen || usedDoelgroepen.length === 0){
      return doelgroepen;
    }
    return doelgroepen.filter(dg => !usedDoelgroepen.some(f => f.toLowerCase() == dg.toLowerCase()));
  }

}
