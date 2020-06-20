import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // selectedUser: User = {
  //   username: '',
  //   name: '',
  //   email: '', 
  //   password: '',
  //   retypedPassword: ''
  // };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  // //HttpMethods

  // postUser(user: User){
  // return this.http.post(environment.apiBaseUrl+'/users',user,this.noAuthHeader);
  // }

  login(authCredentials) {
    return this.http.post(environment.apiUrl + 'login_check', authCredentials, this.noAuthHeader);
  }

  // getUserById(id : string) {
  // return this.http.get(environment.apiBaseUrl + '/users/'+ id);
  // }


  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  getUserPayload1() {
    var token = this.getToken();
    if (token) {
      let userPayload = atob(token.split('.')[1]);  
      return JSON.parse(userPayload); //return it as an object, not a string.
    }
    else
      return { "error": "user.service.ts -> getUserPayload1() failed !" };
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload1();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}