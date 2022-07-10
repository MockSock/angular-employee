import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'localhost:5000/employees'

  // Always make sure this is set to private
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(this.url)
  }

  public createEmployee(employee: Employee) {
    return this.http.post<any>(this.url, employee)
  }
}
