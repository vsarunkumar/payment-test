import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import * as sha512 from 'js-sha512';  

// import { environment } from './environments/environment';

// const URL = `${environment.apiUrl}`;

@Injectable()

export class HomeService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  requestPayment(data) {

    const formData = new FormData();
    formData.append('address_line_1', 'address_line_1');
    formData.append('address_line_2', 'address_line_2');
    formData.append('amount', '1');
    formData.append('api_key', '01113598-0efc-49a1-853e-183fb39c7861');
    formData.append('city', 'kollam');
    formData.append('country', 'india');
    formData.append('currency', 'INR');
    formData.append('description', 'description');
    formData.append('email', 'arunkumar@aabasoft.in');
    formData.append('mode', 'TEST');
    formData.append('name', 'arun');
    formData.append('order_id', 'ord123990');
    formData.append('phone', '8943639627');
    formData.append('return_url', 'http://localhost:4200/produc-details');
    formData.append('state', 'kerala');
    formData.append('udf1', 'udf1');
    formData.append('udf2', 'udf2');
    formData.append('udf3', 'udf3');
    formData.append('udf4', 'udf4');
    formData.append('udf5', 'udf5');
    formData.append('zip_code', '898989');

    const value = '45d3e30c7b244ce6f496293d6d3dbd963922c060|address_line_1:address_line_2|1|01113598-0efc-49a1-853e-183fb39c7861|kollam|india|INR|description|arunkumar@aabasoft.in|TEST|arun|ord123990|8943639627|http://localhost:4200/produc-details|kerala|udf1|udf2|udf3|udf4|udf5|898989';
    formData.append('hash', sha512.sha512(value).toUpperCase());

    console.log('hhh    ', sha512.sha512(value).toUpperCase())

    const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'application/json'
    }),
    responseType: 'text'
};

    // const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post(`http://localhost:3000/api`, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = error.error;
    }
    return throwError(errorMessage);
  }

}
