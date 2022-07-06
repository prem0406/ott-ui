import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.interface';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-watch-later',
  templateUrl: './watch-later.component.html',
  styleUrls: ['./watch-later.component.css']
})
export class WatchLaterComponent implements OnInit {

  constructor(private movieService: HttpService, private router: Router) { }

  movies: Movie[];

  ngOnInit(): void {
    this.movieService.getWatchLater().
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
