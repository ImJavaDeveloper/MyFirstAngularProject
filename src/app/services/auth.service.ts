import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../login/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private authUrl: string = 'http://localhost:3001/auth/v1';
  
  constructor(private httpClient:HttpClient) {

   }
  
  authenticateUser(userDetails: user)
  {
  console.log('Inside Authenticate method ...',userDetails);
  return this.httpClient.post(this.authUrl,userDetails);  }

  setBearerToken(token:any)
  {
    localStorage.setItem('bearerToken',token);
  }
  getBearerToken()
  {
    return localStorage.getItem('bearerToken');
  }
}
