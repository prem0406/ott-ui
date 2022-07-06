import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/http.service';
import {Movie} from '../../models/movie.interface'

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  addressForm = this.fb.group({
    name: [null, Validators.required],
    title: [null ],
    rating: [null],
    desc: [null],
    language: null,
    genre: [null],
  });

 

  constructor(private fb: FormBuilder, private movieService: HttpService) {}

  onSubmit(): void {

    
     let payload = {
      id: new Date().getMilliseconds(),
      ...this.addressForm.value
    }

    this.movieService.postMovie(payload)
    .subscribe(
      data =>{
        alert('Success!');
        this.addressForm.reset();
      }, () => {
        alert('Something went wrong!');
      }
    )

    
  }
}
