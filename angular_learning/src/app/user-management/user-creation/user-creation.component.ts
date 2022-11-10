import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

interface pos {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent implements OnInit {

  public form : FormGroup 

  constructor(private fb : FormBuilder ,private router : Router, private Service : UserService ) { 
    
    this.form = this.fb.group({
      id : [null ,[Validators.required]],
      name : [null ,[Validators.required]],
      age : [null ,[Validators.required,Validators.min(19)]],
      gender : [null ,[Validators.required]],
      email : [null ,[Validators.required , Validators.email]],
      position : [null ,[Validators.required]],
      marital : [null ,[Validators.required]],
      addresgrup : this.fb.array([this.adressformgrup()])
      
    })
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {
  }

  poss: pos[] = [
    {value: 'Manager', viewValue: 'Manager'},
    {value: 'Admin', viewValue: 'Admin'},
    {value: 'Employee', viewValue: 'Employee'},
  ];

  get addres() : FormArray{
    return this.form.get('addresgrup')as FormArray
  }
  
  adressformgrup() : FormGroup {
    return this.fb.group({
      addres : [null ,[Validators.required]],
      zip : [null ,[Validators.required,Validators.minLength(6),Validators.maxLength(9)]],
      city : [null ,[Validators.required]],
      country : [null ,[Validators.required]],
    })
  }

  submit() : void {
    const payload = this.form.value;
    console.log(payload);
    this.Service.addUser(payload)
    this.router.navigate(['user-management','list'])
    
    
  }
}