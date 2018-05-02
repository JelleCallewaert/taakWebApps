import { Doelgroep } from '../doelgroep/doelgroep.model';
import { Benodigdheid } from '../benodigdheid/benodigdheid.model';

export class Spel {
    private _id: string;
    private _titel: string;
    private _beschrijving: string;
    private _benodigdheden = new Array<Benodigdheid>();
    private _minAantalKinderen: number;
    private _maxAantalKinderen: number;
    private _doelgroepen = new Array<Doelgroep>();
    private _datumToegevoegd: Date;

    constructor(
      titel: string, 
      beschrijving?: string, 
      benodigdheden: Benodigdheid[] = [], 
      minAantalKinderen?: number, 
      maxAantalKinderen?: number, 
      doelgroepen: Doelgroep[] = [], 
      datumToegevoegd: Date = null
    ) {
      this._titel = titel;
      this._beschrijving = beschrijving;
      this._benodigdheden = benodigdheden;
      this._minAantalKinderen = minAantalKinderen;
      this._maxAantalKinderen = maxAantalKinderen;
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
    get minAantalKinderen() : number {
      return this._minAantalKinderen;
    }
    get maxAantalKinderen() : number {
      return this._maxAantalKinderen;
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
    
    addBenodigdheden(benodigdheid: Benodigdheid) {
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
        minAantal: this._minAantalKinderen,
        maxAantal: this._maxAantalKinderen,
        doelgroepen: this._doelgroepen,
        datumCreated: this._datumToegevoegd
      };
    }

    static fromJSON(json: any): Spel {
      const sp = new Spel(
        json.titel,
        json.beschrijving,
        json.benodigdheden.map(Benodigdheid.fromJSON),
        json.minAantal,
        json.maxAantal,
        json.doelgroepen.map(Doelgroep.fromJSON),
        json.datumCreated
      );
      sp._id = json._id;
      return sp;
    }
  }