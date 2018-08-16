export class Rating {
    private _id: string;
    private _rate: number;
    private _username: string;

    static fromJSON(json): Rating{
        const rating = new Rating(json.rate, json.username);
        rating._id = json._id;
        return rating;
    }

    toJSON() {
        return {
            _id: this._id,
            rate: this._rate,
            username: this._username
        }
    }

    constructor(rate: number, username: string){
        this._rate = rate;
        this._username = username;
    }

    get id(): string {
        return this._id;
    }

    get rate(): number {
        return this._rate;
    }
    
    set rate(rate: number){
        this._rate = rate;
    }

    get username(): string {
        return this._username;
    }

    set username(username: string) {
        this._username = username;
    }
}