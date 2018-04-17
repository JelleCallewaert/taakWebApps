import { Pipe, PipeTransform } from '@angular/core';
import { Spel } from './spel/spel.model';

@Pipe({
  name: 'doelgroepFilter'
})
export class DoelgroepFilterPipe implements PipeTransform {

  transform(spelen: Spel[], doelgroep: string): Spel[] {
    if(!doelgroep || doelgroep.length === 0) return spelen;

    return spelen.filter(spel => spel.doelgroepen.find(dg => dg.startsWith(doelgroep)));
  }

}
