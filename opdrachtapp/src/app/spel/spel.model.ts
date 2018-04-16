export class Spel {
    private _titel: string;
    private _beschrijving: string;
    private _benodigdheden = new Array<string>();
    private _minAantalKinderen: number;
    private _maxAantalKinderen: number;
    private _doelgroep = new Array<string>();
    private _toegevoegdOp: Date = new Date();

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
    addBenodigdheden(naam: string, hoeveelheid?: number) {
      this._benodigdheden.push(`${hoeveelheid || 1} ${name}`);
    }
  }