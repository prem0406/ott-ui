import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpService } from 'src/app/shared/http.service';
import { Movie } from 'src/app/models/movie.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { id: 1, title: 'Card 1', cols: 1, rows: 1, img: 'https://source.unsplash.com/XvpSmfSFAII' },
          { id: 2, title: 'Card 2', cols: 1, rows: 1, img: 'https://source.unsplash.com/XvpSmfSFAII' },
          { id: 3, title: 'Card 3', cols: 1, rows: 1, img: 'https://source.unsplash.com/XvpSmfSFAII' },
          { id: 4, title: 'Card 4', cols: 1, rows: 1, img: 'https://source.unsplash.com/XvpSmfSFAII' }
        ];
      }

      return [
        { id: 1, title: 'Card 1', cols: 2, rows: 1, img: 'https://source.unsplash.com/XvpSmfSFAII' },
        { id: 2, title: 'Card 2', cols: 1, rows: 1, img: 'https://source.unsplash.com/XvpSmfSFAII' },
        { id: 3, title: 'Card 3', cols: 1, rows: 1, img: 'https://source.unsplash.com/XvpSmfSFAII' },
        { id: 4, title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private movieService: HttpService, private router: Router) {}

  movies: Movie[];

  ngOnInit(): void {
    this.movieService.getMovieList().
    subscribe((res: Movie[] | any) => {
      this.movies = res;
    }, error => this.handleErrorResponse(error)
    );

    // window.location.reload();
  }

  handleErrorResponse(error:any) {
    console.log('Error getting movies ', error);
  }

  clickHandler = (id: number)=>{
  
    this.router.navigate(['movie', id]);
  }

  addWatchLater(data: Movie){
    if(this.movieService.isAuth()){

    
      this.movieService.postWatchedLater(data).subscribe(res => {
        alert("Success!")
      }, error=> alert("Something went wrong!"))
  
    } else {
      this.router.navigate(["login"])
    }
  }

  addFav(data: Movie){
    if(this.movieService.isAuth()){

    
    this.movieService.postFav(data).subscribe(res => {
      alert("Success!")
    }, error=> alert("Something went wrong!"))

  } else {
    this.router.navigate(["login"])
  }

  }
}
