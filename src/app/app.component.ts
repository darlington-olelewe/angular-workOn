import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Movie } from './Movie';
import { MovieService } from './movie.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  flops: Movie[];
  actors;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getMovies()
    .subscribe();
  }

}
