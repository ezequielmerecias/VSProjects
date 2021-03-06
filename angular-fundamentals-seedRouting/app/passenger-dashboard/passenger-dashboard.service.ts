import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/toPromise';
import { Passenger } from './models/passenger.interface';

const PASSENGER_API : string = '/api/passengers';

@Injectable()
export class PassengerDashboardService{
    constructor(private http: Http) {
        console.log(this.http);
    }

    getPassengers(): Observable<Passenger[]>{
    // getPassengers(): Promise<Passenger[]>{
        return this.http
        .get(PASSENGER_API)
        // .toPromise()
        //.then((response: Response) => response.json());
        .map((response: Response) => {
            return response.json();
        })
        .catch((error:any) => Observable.throw(error.json()));
    }

    getPassenger(id:number): Observable<Passenger>{
        // getPassengers(): Promise<Passenger[]>{
            return this.http
            .get(`${PASSENGER_API}/${id}`)
            // .toPromise()
            //.then((response: Response) => response.json());
            .map((response: Response) => {
                return response.json();
            })
            .catch((error:any) => Observable.throw(error.json()));
    }

    updatePassenger(passenger:Passenger): Observable<Passenger>{
    // updatePassenger(passenger:Passenger): Promise<Passenger>{
        let headers = new Headers({
            'Content-Type':'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http
        .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
        // .toPromise()
        // .then((response: Response) => response.json())
        .map((response: Response) => response.json())
        .catch((error:any) => Observable.throw(error.json()));
    }

    removePassenger(passenger:Passenger): Observable<Passenger>{
    // removePassenger(passenger:Passenger): Promise<Passenger>{
        return this.http
        .delete(`${PASSENGER_API}/${passenger.id}`)
        // .toPromise()
        // .then((response: Response) => response.json());
        .map((response: Response) => response.json())
        .catch((error:any) => Observable.throw(error.json()));
    }
}