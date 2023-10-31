import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUpData:any;
  constructor( private route: ActivatedRoute,
    private router: Router ) {}

  signUp(data:any){
    this.router.navigate(['/home']);
  }

}
