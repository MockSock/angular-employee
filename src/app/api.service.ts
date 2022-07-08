import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Always make sure this is set to private
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get('localhost:5000/employees')
  }

  public createEmployee(employee: Employee) {
    const url = 'localhost:5000/employees'
    return this.http.post<any>(url, employee)
  }
}
