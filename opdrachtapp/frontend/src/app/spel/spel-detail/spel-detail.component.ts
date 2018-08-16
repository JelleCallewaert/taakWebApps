import { Component, OnInit } from '@angular/core';
import { Spel } from '../spel/spel.model';
import { ActivatedRoute } from '@angular/router';
import { SpelDataService } from '../spel-data.service';
import { Rating } from '../rating/rating.model';
import { AuthenticationService } from '../../user/authentication.service';

@Component({
  selector: 'app-spel-detail',
  templateUrl: './spel-detail.component.html',
  styleUrls: ['./spel-detail.component.css']
})
export class SpelDetailComponent implements OnInit {

  private _spel: Spel;

  constructor(private route: ActivatedRoute, private spelDataService: SpelDataService, private authService: AuthenticationService) {}

  ngOnInit() {
    this.route.data.subscribe(item => 
      this._spel = item['spel']);
  }

  get spel(): Spel{
    return this._spel;
  }

  starList: boolean[] = [true,true,true,true,true];
  public vote:number;
  setStar(data:any){
      this.vote=data+1;                               
      for(var i=0;i<=4;i++){  
        if(i<=data){  
          this.starList[i]=false;  
        }  
        else{  
          this.starList[i]=true;  
        }  
     }  
  }

  addRating(){
    if(this.hasNotVoted(this.authService.user$.value)){
      let rating = new Rating(this.vote, this.authService.user$.value);
      console.log(rating)
      this._spel.addRating(rating);
      console.log("addrating: " + this.vote);
      console.log(this._spel)
      this.spelDataService.addRatingToSpel(rating, this._spel)
    }
  }

  hasNotVoted(naam: string): boolean{
    let flag: boolean = true;
    this._spel.ratings.forEach(rating => {
      if(rating.username == naam) {
        flag = false;
      }
    })
    console.log("hasnotvoted:" + flag)
    return flag;
  }

}
