import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  userData : any;
  constructor( private route: ActivatedRoute,
    private router: Router ) {}

  ngOnInit() {
    
  }

  changeData(event:any) {
    var msg = event.target.value;
  }

  login(data:any) {
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
  }

}
