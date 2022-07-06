import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.interface';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private movieService: HttpService, private router: Router) { }

  movies: Movie[];

  ngOnInit(): void {
    this.movieService.getFav().
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
