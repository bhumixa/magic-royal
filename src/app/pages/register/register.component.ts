import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpData = {
    userName:"",
    email:"",
    mobile:"",
    password:""
  };
  constructor( private route: ActivatedRoute,
    private router: Router ) {}

  signUp(data:any){
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
    
  }

}
