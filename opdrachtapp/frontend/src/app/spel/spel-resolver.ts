import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Spel } from "./spel/spel.model";
import { Observable } from "rxjs/Observable";
import { SpelDataService } from "./spel-data.service";

@Injectable()
export class SpelResolver implements Resolve<Spel> {

    constructor(private spelDataService: SpelDataService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Spel> {
        return this.spelDataService.getSpel(route.params['id']);
    }
}