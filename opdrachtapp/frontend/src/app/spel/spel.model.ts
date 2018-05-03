import { Doelgroep } from '../doelgroep/doelgroep.model';
import { Benodigdheid } from '../benodigdheid/benodigdheid.model';

export class Spel {
    private _id: string;
    private _titel: string;
    private _beschrijving: string;
    private _benodigdheden: Benodigdheid[];
    private _minAantal: number;
    private _maxAantal: number;
    private _doelgroepen: Doelgroep[];
    private _datumToegevoegd: Date;

    constructor(
      titel: string, 
      beschrijving: string, 
      benodigdheden?: Benodigdheid[], 
      minAantal?: number, 
      maxAantal?: number, 
      doelgroepen?: Doelgroep[], 
      datumToegevoegd?: Date
    ) {
      this._titel = titel;
      this._beschrijving = beschrijving;
      this._benodigdheden = benodigdheden || new Array();
      this._minAantal = minAantal;
      this._maxAantal = maxAantal;
      this._doelgroepen = doelgroepen;
      this._datumToegevoegd = datumToegevoegd ? datumToegevoegd : new Date();
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
    get id() : string {
      return this._id;
    }
    
    addBenodigdheid(benodigdheid: Benodigdheid) {
      this._benodigdheden.push(benodigdheid);
    }

    addDoelgroep(doelgroep: Doelgroep){
      this._doelgroepen.push(doelgroep);
    }

    toJSON(){
      return {
        id: this._id,
        titel: this._titel,
        beschrijving: this._beschrijving,
        benodigdheden: this._benodigdheden,
        minAantal: this._minAantal,
        maxAantal: this._maxAantal,
        doelgroepen: this._doelgroepen,
        datumCreated: this._datumToegevoegd
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
        json.datumCreated
      );
      sp._id = json._id;
      return sp;
    }
  }