import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../news/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private authService: AuthService,
    private httpclient: HttpClient
  
  ) { }

  getNews(): Observable<News[]>
  {
   return this.httpclient.get<News[]>('http://localhost:3000/news',{
         headers: new HttpHeaders().set(
         'Authorization',`${this.authService.getBearerToken()}`
         ),
      });
  }

  addNews(newsObj:News)
  {
    return this.httpclient.post<News>(
      'http://localhost:3000/news',newsObj,
      {
        headers: new HttpHeaders().set(
          'Authorization',`${this.authService.getBearerToken()}`
        ),
      }
    );
  }
}
