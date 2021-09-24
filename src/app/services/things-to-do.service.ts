import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Priority, Severity, Status, ThingsToDo } from '../startbox/startbox';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ThingsToDoService {
  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/thingsToDo";

  getThings(): Observable<ThingsToDo[]> {
    return this.http.get<ThingsToDo[]>(this.path).pipe(
      tap(data_things => console.log(JSON.stringify(data_things))),
      catchError(this.handleError)
    );
  }

  
  addToDo(thing: ThingsToDo): Observable<ThingsToDo> {
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<ThingsToDo>(this.path, thing, httpOptions).pipe(
      tap(data_things => console.log(JSON.stringify(data_things))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Something went wrong' + err.error.message;
    } else {
      errorMessage = 'Something went wrong';
    }
    return throwError(errorMessage);
  };
}

@Injectable()
export class PriorityService {
  constructor(private http: HttpClient) { }
  path2 = "http://localhost:3000/priority";
  getPriority(): Observable<Priority[]> {
    return this.http.get<Priority[]>(this.path2).pipe(
      tap(data_priority => console.log(JSON.stringify(data_priority))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Something went wrong' + err.error.message;
    } else {
      errorMessage = 'Something went wrong';
    }
    return throwError(errorMessage);
  };
}

@Injectable()
export class SeverityService {
  constructor(private http: HttpClient) { }
  path3 = "http://localhost:3000/severity";
  getSeverity(): Observable<Severity[]> {
    return this.http.get<Severity[]>(this.path3).pipe(
      tap(data_severity => console.log(JSON.stringify(data_severity))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Something went wrong' + err.error.message;
    } else {
      errorMessage = 'Something went wrong';
    }
    return throwError(errorMessage);
  };
}

@Injectable()
export class StatusService {
  constructor(private http: HttpClient) { }
  path4 = "http://localhost:3000/status";
  getStatus(): Observable<Status[]> {
    return this.http.get<Status[]>(this.path4).pipe(
      tap(data_status => console.log(JSON.stringify(data_status))),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Something went wrong' + err.error.message;
    } else {
      errorMessage = 'Something went wrong';
    }
    return throwError(errorMessage);
  };


}
