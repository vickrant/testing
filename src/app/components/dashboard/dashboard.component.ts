import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Observable} from "rxjs/Observable";
import { map } from 'rxjs/operators';
import {HttpParams} from "@angular/common/http";
import {HttpErrorResponse} from '@angular/common/http';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public apiServerUrl : string = environment.api.server;
  courses$: Observable<Course[]>;
  apiRoot: string = "http://httpbin.org";
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  doGET() {
  console.log("GET");
  // this.http.get<UserResponse>('https://api.github.com/users/seeschweiler/23').subscribe(data => {
  //   console.log("User Login: " + data.login);
  //   console.log("Bio: " + data.bio);
  //   console.log("Company: " + data.company);
  // },
  // (err: HttpErrorResponse) => {
  //   if (err.error instanceof Error) {
  //     console.log("Client-side error occured.");
  //   } else {
  //     console.log(err)
  //     console.log("Server-side error occured.");
  //   }
  // });
  const params = new HttpParams()
    .set('orderBy', '"$key"')
    .set('limitToFirst', "1");
  this.courses$ = this.http
  .get<Course[]>(" https://api.github.com/users/seeschweiler",{params})
  .pipe(map(data => _.values(data)));


  

  }

  doPOST() {
    console.log("POST");
    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  doPUT() {
    console.log("PUT");
  }

  doDELETE() {
    console.log("DELETE");
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
  }
}
interface UserResponse {
  login: string;
  bio: string;
  company: string;
}
interface Course {
  description: string;
  courseListIcon:string;
  iconUrl:string;
  longDescription:string;
  url:string;
}