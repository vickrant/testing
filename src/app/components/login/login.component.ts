import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService} from '../login/login.service'
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private loginService:LoginService,public router: Router,public jwtHelper: JwtHelperService) { }

  ngOnInit() {
    const token = localStorage.getItem('vtoken');
    if(this.jwtHelper.isTokenExpired(token))
    {
      this.router.navigate(['login']);
    }
    else
    {
      this.router.navigate(['dashboard']);
    }
       
  }
   onSubmit() {
     console.log(this.model)
        this.loginService.login(JSON.stringify(this.model)).subscribe((data:any) => {
        localStorage.setItem('vtoken', data.token);
        this.router.navigate(['dashboard']);
       });

//   this.loginService.login(JSON.stringify(this.model)).subscribe((data:any) => {
//   localStorage.setItem('vtoken', data.token);
//   this.router.navigate(['dashboard']);
//  });
// }

   }


}