import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.interface';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-watched',
  templateUrl: './watched.component.html',
  styleUrls: ['./watched.component.css']
})
export class WatchedComponent implements OnInit {

  constructor(private movieService: HttpService, private router: Router) { }

  movies: Movie[];

  ngOnInit(): void {
    this.movieService.getWatched().
    subscribe((res: Movie[] | any) => {
      this.movies = res;
    }, error => this.handleErrorResponse(error)
    );

  }

  handleErrorResponse(error:any) {
    console.log('Error getting movies ', error);
  }

  clickHandler = (id: number)=>{
  
    this.router.navigate(['movie', id]);
  }
}
