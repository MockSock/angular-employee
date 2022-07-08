import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styleUrls: ['./new-employee-form.component.css']
})
export class NewEmployeeFormComponent implements OnInit {

  @Input() newEmployee?: Employee

  constructor(private formBuilder: FormBuilder) { }

  newEmployeeForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    role: ['', Validators.required],
    employmentType: ['', Validators.required]
  })

  ngOnInit(): void {
    this.managerWarning()
  }

  managerWarning() {
    alert('This form can only be filled out by Big Boss')
    console.log('An authenticator will be added later that will check the user logged in to authenticate this process')
  }
}
