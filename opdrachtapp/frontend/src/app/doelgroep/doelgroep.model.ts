export enum Naam {
  "None",
  "Kleuters",
  "Actief",
  "Creatief",
  "Kastaars"
}

export class NaamDoelgroep {
  constructor(private _naam: Naam){
  }
  get naam(): Naam {
    return this._naam;
  }
}

export class Doelgroep{

    private _id : string;
    private _naam : Naam;

    constructor(naam: Naam = Naam.None){
        this._naam = naam;
    }

    static fromJSON(json): Doelgroep {
        const doelg = new Doelgroep(json.naam);
        doelg._id = json._id;
        return doelg;
    }

      get id(): string {
        return this._id;
      }
      get naam(): Naam {
        return this._naam;
      }
      set naam(name: Naam) {
        this._naam = name;
      }
      get dg(): string{
        return this._naam.toString();
      }

      toJSON() {
        return {
          _id: this._id,
          naam: this._naam,
        };
      }
}