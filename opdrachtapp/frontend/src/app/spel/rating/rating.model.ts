export class Rating {
    private _id: string;
    private _rate: number;
    private _reviewer: string;

    static fromJSON(json): Rating{
        const rating = new Rating(json._rate);
        rating._id = json._id;
        rating._reviewer = json._reviewer;
        return rating;
    }

    toJSON() {
        return {
            _id: this._id,
            _rate: this._rate,
            _reviewer: this._reviewer
        }
    }

    constructor(rate: number){
        this._rate = rate;
    }

    get id(): string {
        return this._id;
    }

    get rate(): number {
        return this._rate;
    }

    get reviewer(): string {
        return this._reviewer;
    }

    set reviewer(reviewer: string) {
        this._reviewer = reviewer;
    }
}