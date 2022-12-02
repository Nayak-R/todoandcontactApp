import { Injectable } from "@angular/core";
import {
    HttpErrorResponse,
    HttpClient,
    HttpParams,
    HttpHeaders
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import {
    throwError, Observable
} from 'rxjs';

@Injectable()
export class DataService {

    constructor(private httpClient: HttpClient) { }

    addObject(url: string, body: any): Observable<Object> {
        const options = { headers: this.getHeader() };
        return this.httpClient.post(url, body, options)
            .pipe(tap(data => { }), catchError(res => this.handleError(res)));
    }

    updateObject(url: string, body: any): Observable<Object> {
        const options = { headers: this.getHeader() };
        return this.httpClient.put(url, body, options)
            .pipe(tap(data => { }), catchError(res => this.handleError(res)));
    }

    deleteObject(url: string, params?: HttpParams): Observable<Object> {
        const options = { headers: this.getHeader(), params: params };
        return this.httpClient.delete(url, options)
            .pipe(tap(data => { }), catchError(res => this.handleError(res)));
    }

    getAllObjects(url: string, params?: HttpParams): Observable<Object[]> {
        const options = { headers: this.getHeader(), params: params };
        return this.httpClient.get<Object[]>(url, options)
            .pipe(tap(data => { }), catchError(res => this.handleError(res)));
    }

    getObjectById(url: string, params?: HttpParams): Observable<Object> {
        const options = { headers: this.getHeader(), params: params };
        return this.httpClient.get(url, options)
            .pipe(tap(data => { }), catchError(res => this.handleError(res)));
    }

    private handleError(error: HttpErrorResponse) {
        return throwError(error!.error!.message);
    }

    getHeader(): HttpHeaders {

        return new HttpHeaders({
            'Content-Type': 'application/json'
        });

    }

}