import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormControl} from '@angular/forms';
import { ApiService } from '../api.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styleUrls: ['./new-employee-form.component.css']
})
export class NewEmployeeFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  newEmployeeForm = this.formBuilder.group({
    employee_id: new FormControl(' ',[Validators.required]),
    full_name: new FormControl(' ', [Validators.required]),
    role: new FormControl(' ', [Validators.required]),
    employment_type: new FormControl(' ', [Validators.required])
  })

  ngOnInit(): void {
    this.managerWarning()
  }

  managerWarning() {
    alert('This form can only be filled out by a manager')
    console.log('An authenticator will be added later that will check the user logged in to authenticate this process')
  }

  createNewEmployee(data: any) {
    this.api.createEmployee(data).subscribe((response: any) =>{
      console.log(response)
    })
  }
}
