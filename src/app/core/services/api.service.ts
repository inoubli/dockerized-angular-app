import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any): Observable<never> {
    throw new Error(error);
  }

  get(path: string, params: HttpParams = new HttpParams()) {
    return this.http
      .get(`${environment.apiUrl}${path}`, { params })
      // .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(`${environment.apiUrl}${path}`, body)
      // .pipe(catchError(this.formatErrors));
  }

  patch(path: string, body: Object = {}): Observable<any> {
    return this.http
      .patch(`${environment.apiUrl}${path}`, body)
      // .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = [{}]): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}${path}`, body)
      // .pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http
      .delete(`${environment.apiUrl}${path}`)
      // .pipe(catchError(this.formatErrors));
  }
}
