import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styleUrls: ['./new-employee-form.component.css']
})
export class NewEmployeeFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  newEmployeeForm = this.formBuilder.group({
    fullName: '',
    role: '',
    employmentType: ''
  })

  ngOnInit(): void {
    this.managerWarning()
  }

  managerWarning() {
    alert('This form can only be filled out by managers')
    console.log('An authenticator will be added later that will check the user logged in to authenticate this process')
  }
}
