import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(http: HttpClient) { }

  getEmployees() {
    this.http.get('localhost:5000/employees')
  }
}
