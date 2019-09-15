import { Component } from '@angular/core';
//import { LoginService } from './core/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	  title = 'Angular-Interceptor';
	  constructor() {
	   // this.loginService.login({}).subscribe(data => {
	     // console.log(data);
	    //});
	  }

	  getCustomerDetails() {
	    // this.loginService.getCustomerDetails().subscribe((data) => {
	    //   console.log('----->>>', data);
	    // });
	  }
}