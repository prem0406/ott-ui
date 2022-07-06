import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isAuth: boolean = false;
  userName: string | null;
  role: string | null;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.isAuth = this.authService.isAuth();
    this.userName = this.authService.getName();
    this.role = this.authService.getRole();
  }

  logoutUser(){
    this.authService.logout();
    this.router.navigate(['login']);
   
  }

  showAdd(){
    return this.role === "ADMIN"
  }

  gotoAddMovie() {
    this.router.navigate(['add']);
  }

  isPrime(){
    if(!this.isAuth){
      return false;
    }
    return localStorage.getItem(`PRIME${this.userName}`) !== null;
  }
  
  joinPrime(){

    if(!this.isAuth){
      this.router.navigate(['login']);
     
    } else{

      localStorage.setItem(`PRIME${this.userName}`, "true");
    }

  }

}
