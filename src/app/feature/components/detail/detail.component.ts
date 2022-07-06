import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';
import { Movie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  constructor(private route: ActivatedRoute, private movieService: HttpService) {}

  movieId: number;
  movie: Movie;

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['id'];


    this.movieService.getMovie(this.movieId).subscribe((res: Movie | any)=>{
      this.movie = res;
      this.movieService.postWatched(this.movie).subscribe();
    })

    
  }
}
