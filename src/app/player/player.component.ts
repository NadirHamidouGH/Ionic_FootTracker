import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {

  scorers1: any;
  scorers2: any;
  scorers3: any;
  scorers4: any;
  scorers5: any;
  scorers6: any;
  scorers7: any;

  constructor(private info: InfoService) { }

  ngOnInit() {
    this.info.getScorers1().subscribe(
      fix => {
        this.scorers1 = fix.scorers;
        console.log( 'buteurs : ' + this.scorers1);
      }
    );


    this.info.getScorers2().subscribe(
      fix => {
        this.scorers2 = fix.scorers;
        console.log( 'buteurs : ' + this.scorers2);
      }
    );


    this.info.getScorers3().subscribe(
      fix => {
        this.scorers3 = fix.scorers;
        console.log( 'buteurs : ' + this.scorers3);
      }
    );

    this.info.getScorers4().subscribe(
      fix => {
        this.scorers4 = fix.scorers;
        console.log( 'buteurs : ' + this.scorers4);
      }
    );

    this.info.getScorers5().subscribe(
      fix => {
        this.scorers5 = fix.scorers;
        console.log( 'buteurs : ' + this.scorers5);
      }
    );

    this.info.getScorers6().subscribe(
      fix => {
        this.scorers6 = fix.scorers;
        console.log( 'buteurs : ' + this.scorers6);
      }
    );

    this.info.getScorers7().subscribe(
      fix => {
        this.scorers7 = fix.scorers;
        console.log( 'buteurs : ' + this.scorers7);
      }
    );
  }

}
