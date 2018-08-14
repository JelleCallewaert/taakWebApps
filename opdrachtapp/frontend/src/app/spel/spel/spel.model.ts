import { Doelgroep } from '../doelgroep/doelgroep.model';
import { Benodigdheid } from '../benodigdheid/benodigdheid.model';
import { Rating } from '../rating/rating.model'

export class Spel {
    private _id: string;
    private _titel: string;
    private _beschrijving: string;
    private _benodigdheden: Benodigdheid[];
    private _minAantal: number;
    private _maxAantal: number;
    private _doelgroepen: Doelgroep[];
    private _datumToegevoegd: Date;
    private _auteur: string;
    private _ratings: Rating[]

    constructor(
      titel: string, 
      beschrijving: string, 
      benodigdheden?: Benodigdheid[], 
      minAantal?: number, 
      maxAantal?: number, 
      doelgroepen?: Doelgroep[], 
      datumToegevoegd?: Date,
      ratings?: Rating[]
    ) {
      this._titel = titel;
      this._beschrijving = beschrijving;
      this._benodigdheden = benodigdheden || new Array();
      this._minAantal = minAantal;
      this._maxAantal = maxAantal;
      this._doelgroepen = doelgroepen || new Array();
      this._datumToegevoegd = datumToegevoegd ? datumToegevoegd : new Date();
      this._ratings = ratings || new Array();
    }

    get titel() : string {
      return this._titel;
    }
    get beschrijving() : string {
        return this._beschrijving;
    }
    get benodigdheden() : Benodigdheid[] {
      return this._benodigdheden;
    }
    get minAantal() : number {
      return this._minAantal;
    }
    set minAantal(minAantal: number) {
      this._minAantal = minAantal;
    }
    get maxAantal() : number {
      return this._maxAantal;
    }
    set maxAantal(maxAantal: number) {
      this._maxAantal = maxAantal;
    }
    get doelgroepen() : Doelgroep[] {
      return this._doelgroepen;
    }	
    get datumToegevoegd() : Date {
      return this._datumToegevoegd;
    }
    get ratings(): Rating[] {
      return this._ratings;
    }
    get id() : string {
      return this._id;
    }
    set id(id : string){
      this._id = id;
    }

    get averageRating(): number {
      let avg = 0;
      this._ratings.forEach(rate => avg += rate.rate)
      avg = avg/this._ratings.length;
      return avg;
    }
    
    addBenodigdheid(benodigdheid: Benodigdheid) {
      this._benodigdheden.push(benodigdheid);
    }

    addDoelgroep(doelgroep: Doelgroep){
      this._doelgroepen.push(doelgroep);
    }

    addRating(rating: Rating){
      this._ratings.push(rating);
    }

    toJSON(){
      return {
        id: this._id,
        titel: this._titel,
        beschrijving: this._beschrijving,
        benodigdheden: this._benodigdheden//.map(nodig => nodig.toJSON)
        ,
        minAantal: this._minAantal,
        maxAantal: this._maxAantal,
        doelgroepen: this._doelgroepen//.map(doel => doel.toJSON)
        ,
        datumCreated: this._datumToegevoegd,
        auteur: this._auteur,
        ratings: this._ratings
      };
    }

    static fromJSON(json: any): Spel {
      const sp = new Spel(
        json.titel,
        json.beschrijving,
        json.benodigdheden//.map(Benodigdheid.fromJSON)
        ,
        json.minAantal,
        json.maxAantal,
        json.doelgroepen//.map(Doelgroep.fromJSON)
        ,
        json.datumCreated,
        json._ratings//map(Rating.fromJSON)
      );
      sp._id = json._id;
      sp._auteur = json.auteur;
      return sp;
    }
  }