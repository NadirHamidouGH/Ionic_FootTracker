import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

// import { Observable } from 'rxjs/Observable';

// import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InfoService {


  // tslint:disable-next-line: deprecation
  headers = new Headers();
  date: any;
  // tslint:disable-next-line: deprecation
  headers1 = new Headers();
  // tslint:disable-next-line: deprecation
  headers3 = new Headers();
  header: any;
  urlMW;
  urlMD;
  urlMD1;
  urlMD2;
  urlMD3;
  urlMD4;
  url1;
  url2;
  url3;
  url4;
  url5;

  urlMW1;
  urlMW2;
  urlMW3;
  urlMW4;
  urlMW5;
  urlMW6;


  urlCScorers1;
  urlCScorers2;
  urlCScorers3;
  urlCScorers4;
  urlCScorers5;
  urlCScorers6;
  urlCScorers7;

  today;
  dd;
  mm;
  yy;

   date1;
   date2;
// tslint:disable-next-line: deprecation
  constructor(private http: Http) {

    // http://api.football-data.org/v2/competitions/PL/matches?dateFrom=2019-08-09&dateTo=2019-08-09



    this.date1 = this.formatDate();
    this.date2 = this.formatDateNextWeek();

    // this.date = this.formatDate();
    this.date = '2018-08-18';

    console.log('date' + this.date);

    console.log('date1' + this.date1);

    console.log('date2' + this.date2);



    this.headers.append('X-RapidAPI-Key', 'c7ea217786msh320bd4a716c5d58p1f183fjsn7f8b8fe644f0');
    this.headers1.append('X-RapidAPI-Key', 'c7ea217786msh320bd4a716c5d58p1f183fjsn7f8b8fe644f0');
    this.headers3.append('X-Auth-Token', '157f684acb3a4d1cb2168eb5929e35a9');

    this.urlMW = `http://api.football-data.org/v2/competitions/PL/matches?dateFrom=${this.date1}&dateTo=${this.date2}`;
    this.urlMW1 = `http://api.football-data.org/v2/competitions/PD/matches?dateFrom=${this.date1}&dateTo=${this.date2}`;
    this.urlMW2 = `http://api.football-data.org/v2/competitions/SA/matches?dateFrom=${this.date1}&dateTo=${this.date2}`;
    this.urlMW3 = `http://api.football-data.org/v2/competitions/BL1/matches?dateFrom=${this.date1}&dateTo=${this.date2}`;
    this.urlMW4 = `http://api.football-data.org/v2/competitions/FL1/matches?dateFrom=${this.date1}&dateTo=${this.date2}`;
    this.urlMW5 = `http://api.football-data.org/v2/competitions/CL/matches?dateFrom=${this.date1}&dateTo=${this.date2}`;
    this.urlMW6 = `http://api.football-data.org/v2/competitions/EL/matches?dateFrom=${this.date1}&dateTo=${this.date2}`;


    this.urlCScorers1 = 'http://api.football-data.org/v2/competitions/PL/scorers';
    this.urlCScorers2 = 'http://api.football-data.org/v2/competitions/PD/scorers';
    this.urlCScorers3 = 'http://api.football-data.org/v2/competitions/SA/scorers';
    this.urlCScorers4 = 'http://api.football-data.org/v2/competitions/BL1/scorers';
    this.urlCScorers5 = 'http://api.football-data.org/v2/competitions/FL1/scorers';
    this.urlCScorers6 = 'http://api.football-data.org/v2/competitions/CL/scorers';
    this.urlCScorers7 = 'http://api.football-data.org/v2/competitions/EL/scorers';



    this.urlMD = `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/2/${this.date}`;
    this.urlMD1 = `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/87/${this.date}`;
    this.urlMD2 = `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/94/${this.date}`;
    this.urlMD3 = `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/8/${this.date}`;
    this.urlMD4 = `https://api-football-v1.p.rapidapi.com/v2/fixtures/league/4/${this.date}`;

    this.url1 = 'https://api-football-v1.p.rapidapi.com/v2/leagueTable/2';
    this.url2 = 'https://api-football-v1.p.rapidapi.com/v2/leagueTable/87';
    this.url3 = 'https://api-football-v1.p.rapidapi.com/v2/leagueTable/94';
    this.url4 = 'https://api-football-v1.p.rapidapi.com/v2/leagueTable/8';
    this.url5 = 'https://api-football-v1.p.rapidapi.com/v2/leagueTable/4';



   }

   formatDate() {
    let today = new Date();
    let dd = today.getDate();
    console.log("day: " + dd);
    let day: string;
    let mm = today.getMonth() + 1;
    let mounth : string;
    let yyyy = today.getFullYear();
    // console.log(dd);
    // console.log(mm);
    if ( dd < 10 ) {
       day = '0' + dd;
    }else {
      day = ''+dd;
    }
    if ( mm < 10 ) {
      mounth = '0' + mm;
    }else {
      mounth =''+ mm;
    }
    return  yyyy + '-' + mounth + '-' + day;

    // console.log(yyyy + '-' + mounth + '-' + day);

    // let today = new Date();
    // let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // console.log(date);
   }

   formatDateNextWeek() {
    let today = new Date();
    let dd = today.getDate();
    let day : string;
    let mm = today.getMonth() + 1;
    let mounth : string;
    let yyyy = today.getFullYear();
    // console.log(dd);
    // console.log(mm);


///////////////////////////////

    if ( dd < 10 ) {
      day = '0' + (dd + 7 );
    }else if(dd > 23){
      mm = today.getMonth() + 2;
    }
    else {
    day = ''+(dd+7);
    }


    if ( mm < 10 ) {
    mounth = '0' + mm;
    } else {
    mounth = '' + mm;
    }

////////////////////////
    // if ( dd < 10 ) {
    //    day = '0' + (dd + 7 );
    // }
    // if ( mm < 10 ) {
    //   mounth = '0' + mm;
    // }
    return  yyyy + '-' + mounth + '-' + day;
    // console.log(yyyy + '-' + mounth + '-' + day);
   }



   getScorers1() {

    // tslint:disable-next-line: deprecation
    return this.http.get(this.urlCScorers1 ,  {headers: this.headers3}).pipe(
    map(res => res.json())
    );


}

getScorers2() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.urlCScorers2 ,  {headers: this.headers3}).pipe(
  map(res => res.json())
  );


}

getScorers3() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.urlCScorers3 ,  {headers: this.headers3}).pipe(
  map(res => res.json())
  );


}

getScorers4() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.urlCScorers4 ,  {headers: this.headers3}).pipe(
  map(res => res.json())
  );


}

getScorers5() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.urlCScorers5 ,  {headers: this.headers3}).pipe(
  map(res => res.json())
  );


}

getScorers6() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.urlCScorers6 ,  {headers: this.headers3}).pipe(
  map(res => res.json())
  );


}

getScorers7() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.urlCScorers7 ,  {headers: this.headers3}).pipe(
  map(res => res.json())
  );


}

   getMatchWeek() {

    // tslint:disable-next-line: deprecation
    return this.http.get(this.urlMW ,  {headers: this.headers3}).pipe(
    map(res => res.json())
    );


}

getMatchWeek1() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.urlMW1 ,  {headers: this.headers3}).pipe(
  map(res => res.json())
  );


}

getMatchWeek2() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.urlMW2 ,  {headers: this.headers3}).pipe(
  map(res => res.json())
  );


}

getMatchWeek3() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.urlMW3 ,  {headers: this.headers3}).pipe(
  map(res => res.json())
  );


}

getMatchWeek4() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.urlMW4 ,  {headers: this.headers3}).pipe(
  map(res => res.json())
  );


}

getMatchWeek5() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.urlMW5 ,  {headers: this.headers3}).pipe(
  map(res => res.json())
  );


}


getMatchWeek6() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.urlMW6 ,  {headers: this.headers3}).pipe(
  map(res => res.json())
  );


}
   getMatchDay() {

    // tslint:disable-next-line: deprecation
    return this.http.get(this.urlMD ,  {headers: this.headers1}).pipe(
    map(res => res.json())
    );


}

getMatchDay1() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.urlMD1 ,  {headers: this.headers1}).pipe(
  map(res => res.json())
  );


}

getMatchDay2() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.urlMD2 ,  {headers: this.headers1}).pipe(
  map(res => res.json())
  );


}

getMatchDay3() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.urlMD3 ,  {headers: this.headers1}).pipe(
  map(res => res.json())
  );


}


getMatchDay4() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.urlMD4 ,  {headers: this.headers1}).pipe(
  map(res => res.json())
  );


}

   getStandings() {

       // tslint:disable-next-line: deprecation
       return this.http.get(this.url1 ,  {headers: this.headers}).pipe(
       map(res => res.json())
       );


   }

   getStandings1() {

    // tslint:disable-next-line: deprecation
    return this.http.get(this.url2 ,  {headers: this.headers}).pipe(
    map(res => res.json())
    );


}

getStandings3() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.url3 ,  {headers: this.headers}).pipe(
  map(res => res.json())
  );


}

getStandings4() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.url4 ,  {headers: this.headers}).pipe(
  map(res => res.json())
  );


}

getStandings5() {

  // tslint:disable-next-line: deprecation
  return this.http.get(this.url5 ,  {headers: this.headers}).pipe(
  map(res => res.json())
  );


}

}


