import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
// import 'rxjs/operator/map';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
    public apiServerUrl : string = environment.api.server 
    constructor(private http: HttpClient) { }

    login(data) {
        
        return this.http.post(this.apiServerUrl+'auth/login', data);
    }

    getCustomerDetails() {
        return this.http.get('http://localhost:3070/customers/details');
    }

}
