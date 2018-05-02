export class Doelgroep{

    private _id : string;
    private _naam : string;

    constructor(naam: string){
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
      get naam(): string {
        return this._naam;
      }
      set naam(name: string) {
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