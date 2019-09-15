import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../../components/model/user.model";
import { environment } from '../../../environments/environment'

@Injectable({
    providedIn: 'root'
  })
export class UserService {
  public apiServerUrl: string = environment.api.server;
  constructor(private http: HttpClient) { }

  getUsers() {
    /* let fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
     {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
     {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
     {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
   ];
   return Observable.of(fakeUsers).delay(5000);*/
    return this.http.get<User[]>(this.apiServerUrl+'auth/getUsers');
  }

  getUserById(id: string) {
      console.log(id)
    return this.http.get<User>(this.apiServerUrl+'auth/getUser/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.apiServerUrl+'auth/addUser', user);
  }

  updateUser(user: User) {
    return this.http.put(this.apiServerUrl + 'auth/updateUser/' + user._id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.apiServerUrl + 'auth/deleteUser/' + id);
  }
}
