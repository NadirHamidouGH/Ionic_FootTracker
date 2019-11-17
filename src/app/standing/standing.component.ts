import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.scss'],
})
export class StandingComponent  implements OnInit  {



standing: any;
standing1: any;
standing3: any;
standing4: any;
standing5: any;
  // standing: {
  //   compitition: string,
  //   teams: {
  //     teamName: string,
  //     rank: string,
  //     win: string,
  //     draw: string,
  //     lose: string,
  //     gf: string,
  //     ga: string,
  //     points: string
  //   }
  // };

  // private info: InfoService
  constructor(private info: InfoService) {}


  ngOnInit() {
    this.info.getStandings().subscribe(
      stand => {
        this.standing = stand.api.standings;
        console.log(this.standing);
      }
    );

    this.info.getStandings1().subscribe(
      stand => {
        this.standing1 = stand.api.standings;
        console.log(this.standing);
      }
    );


    this.info.getStandings3().subscribe(
      stand => {
        this.standing3 = stand.api.standings;
        console.log(this.standing);
      }
      );

    this.info.getStandings4().subscribe(
        stand => {
          this.standing4 = stand.api.standings;
          console.log(this.standing);
        }
        );
        // this.info.getStandings();

    this.info.getStandings5().subscribe(
          stand => {
            this.standing5 = stand.api.standings;
            console.log(this.standing);
          }
        );
      }


}

    // this.standing.compitition = 'premier League';
    // this.standing.teams.teamName = 'manchester city';
    // this.standing.teams.rank = '1';
    // this.standing.teams.points = '65';