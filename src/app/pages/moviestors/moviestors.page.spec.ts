import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviestors',
  templateUrl: './moviestors.page.html',
  styleUrls: ['./moviestors.page.scss'],
})
export class MoviestorsPage implements OnInit {
  movies: Array<{ title: string }> = [];

  constructor() { }

  ngOnInit() {
    this.movies = [
      { title: 'Film 1' },
      { title: 'Film 2' },
      { title: 'Film 3' }
    ];
  }
}
