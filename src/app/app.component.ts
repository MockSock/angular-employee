import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-employee';

  employeesList: any

  constructor(private api: ApiService) {}

  getEmployees(): any {
    this.api.getEmployees().subscribe((data) => {
      this.employeesList = data
    })
  }
}
