import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss'],
})
export class FixtureComponent implements OnInit {
  fixtures: any;

  fixtures1: any;

  fixtures2: any;

  fixtures3: any;

  fixtures4: any;

  fixturesWeek: any;
  fixturesWeek1: any;
  fixturesWeek2: any;
  fixturesWeek3: any;
  fixturesWeek4: any;
  fixturesWeek5: any;
  fixturesWeek6: any;


  constructor(private info: InfoService) {


   }

  ngOnInit() {
    this.info.getMatchDay().subscribe(
      fix => {
        this.fixtures = fix.api.fixtures;
      }
    );

    this.info.getMatchDay1().subscribe(
      fix => {
        this.fixtures1 = fix.api.fixtures;
      }
    );

    this.info.getMatchDay2().subscribe(
      fix => {
        this.fixtures2 = fix.api.fixtures;

      }
    );

    this.info.getMatchDay3().subscribe(
      fix => {
        this.fixtures3 = fix.api.fixtures;
      }
    );

    this.info.getMatchDay4().subscribe(
      fix => {
        this.fixtures4 = fix.api.fixtures;
      }
    );

    this.info.getMatchWeek().subscribe(
      fix => {
        this.fixturesWeek = fix.matches;

      }
    );

    this.info.getMatchWeek1().subscribe(
      fix => {
        this.fixturesWeek1 = fix.matches;

      }
    );

    this.info.getMatchWeek2().subscribe(
      fix => {
        this.fixturesWeek2 = fix.matches;

      }
    );

    this.info.getMatchWeek3().subscribe(
      fix => {
        this.fixturesWeek3 = fix.matches;

      }
    );

    this.info.getMatchWeek4().subscribe(
      fix => {
        this.fixturesWeek4 = fix.matches;

      }
    );

    this.info.getMatchWeek5().subscribe(
      fix => {
        this.fixturesWeek5 = fix.matches;

      }
    );

    this.info.getMatchWeek6().subscribe(
      fix => {
        this.fixturesWeek6 = fix.matches;

      }
    );



  }

}
