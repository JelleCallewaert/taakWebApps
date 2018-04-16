export class Spel {
    private _titel: string;
    private _beschrijving: string;
    private _benodigdheden = new Array<string>();
    private _minAantalKinderen: number;
    private _maxAantalKinderen: number;
    private _doelgroepen = new Array<string>();
    private _datumToegevoegd: Date = new Date();

    constructor(titel: string, beschrijving: string) {
      this._titel = titel;
      this._beschrijving = beschrijving;
    }
    get titel() : string {
      return this._titel;
    }
    get beschrijving() : string {
        return this._beschrijving;
    }
    get benodigdheden() : string[] {
      return this._benodigdheden;
    }
    get minAantalKinderen() : number {
      return this._minAantalKinderen;
    }
    get maxAantalKinderen() : number {
      return this._maxAantalKinderen;
    }
    get doelgroepen() : string[] {
      return this._doelgroepen;
    }	
    get datumToegevoegd() : Date {
      return this._datumToegevoegd;
    }
    
    addBenodigdheden(naam: string, hoeveelheid?: number) {
      this._benodigdheden.push(`${naam}: ${hoeveelheid || 1}`);
    }
  }