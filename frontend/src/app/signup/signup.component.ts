import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

import { ProductService } from '../shared/services/product.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;

  constructor(private formbuilder: FormBuilder,private productService: ProductService, private http:HttpClient , private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      fullname: [''],
      email: [''],
      password: ['']
    }
    )
  }
  signUp() {
    this.http.post<any>('http://localhost:3001/signupUsers', this.signupForm.value)
      .subscribe(res => {
        console.log(res);
        this.productService.showMessage('Signup Successful');
        this.signupForm.reset();
        this.router.navigate(['login'])
      }, err => {
        alert("Something went wrong !!")
    })
}
}
