import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { map, Observable, of } from 'rxjs';
import { Movie } from '../models/movie.interface';

const EMAIL:string = 'email';
const AUTHENTICATED_USER: string= 'AUTHENTICATED_USER';
const USER_ID: string= 'userId';
const ROLE: string= 'role';
const NAME: string= 'NAME';


const user = [
  {
    "userId": 1,
    "name":"User",
    "email": "user@user.com",
    "role": "USER",
    "password": "12345"
  },
  {
    "userId": 2,
    "name":"Admin",
    "email": "admin@admin.com",
    "role": "ADMIN",
    "password": "12345"
  }
]

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  //Auth related service starts here
  // authenticate(username: string, password: string){
  //   return this.http.post<any>(
  //     `https://m4e2k.mocklab.io/login`, {
  //       username, password
  //     }
  //   ).pipe(map(data => {
  //     sessionStorage.setItem(AUTHENTICATED_USER, username);
  //           sessionStorage.setItem(USER_ID,  data.userId);
  //           sessionStorage.setItem(ROLE, data.role);
  //           sessionStorage.setItem(NAME, data.name);
  //           return data;
  //   }))
  // }

  /**
   * login credential is now hardcoded in this code
   */

   authenticate(username: string, password: string){
    const fountUser = user.find(u => u.email === username && u.password === password);
    if(!fountUser){
      return false;
    }

    sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(USER_ID,  fountUser.userId.toString());
            sessionStorage.setItem(ROLE, fountUser.role);
            sessionStorage.setItem(NAME, fountUser.name);
    return true;
   }

  logout(){
            sessionStorage.removeItem(AUTHENTICATED_USER);
            sessionStorage.removeItem(USER_ID);
            sessionStorage.removeItem(ROLE);
            sessionStorage.removeItem(NAME);
  }

  isAuth():boolean{
    return sessionStorage.getItem(AUTHENTICATED_USER) !== null;
  }

  getRole(): string | null{
    return sessionStorage.getItem(ROLE);
  }

  getName(): string| null{
    return sessionStorage.getItem(NAME);
  }

  //movies related service starts here
  getMovieList(){
    return this.http.get(`${API_URL}/movieList`);
  }

  getMovie(id: number){
    return this.http.get(`${API_URL}/movieList/${id}`);
  }

  postMovie(data: any){
    return this.http.post(`${API_URL}/movieList`, data);
  }

  getFav(){
    return this.http.get(`${API_URL}/fav`);
  }

  getWatched(){
    return this.http.get(`${API_URL}/watched`);
  }

  getWatchLater(){
    return this.http.get(`${API_URL}/watchLater`);
  }

  postWatched(data: Movie){
    return this.http.post(`${API_URL}/watched`, data);
  }

  postWatchedLater(data: Movie){
    return this.http.post(`${API_URL}/watchLater`, data);
  }

  postFav(data: Movie){
    return this.http.post(`${API_URL}/fav`, data);
  }

}
