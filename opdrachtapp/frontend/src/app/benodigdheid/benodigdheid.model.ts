export class Benodigdheid{

  private _id : string;
  private _naam : string;
  private _aantal : number;

  constructor(naam: string, aantal?: number){
      this._naam = naam;
      this._aantal = aantal;
  }

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._naam;
  }
  set name(name: string) {
    this._naam = name;
  }
  get aantal(): number {
    return this._aantal;
  }

  toJSON() {
    return {
      _id : this._id,
      naam : this._naam,
      aantal : this._aantal
    };
  }

  static fromJSON(json): Benodigdheid {
      const ben = new Benodigdheid(json.naam, json.aantal);
      ben._id = json._id;
      return ben;
  }
}