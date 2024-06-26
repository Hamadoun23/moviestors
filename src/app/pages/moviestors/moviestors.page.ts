import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviestors',
  templateUrl: './moviestors.page.html',
  styleUrls: ['./moviestors.page.scss'],
})
export class MoviestorsPage implements OnInit {

  movieApiUrl = '';
  movieData = {
    title: '',
    description: '',
    annee: '',
    imageUrl: '',
    langue: '',
    genre: '',
    pays: '',
    acteurs: '',
    duree: ''
  };

  searchTitle = '';

  constructor(public httpClient: HttpClient, private router: Router) { }

  ngOnInit() {}

  readApi(url: string) {
    return this.httpClient.get(url);
  }

  searchMovie() {
    const search = encodeURIComponent(this.searchTitle).trim();
    console.log('Recherche du film ' + search);
    this.movieApiUrl = 'https://www.omdbapi.com/?apikey=ebc9a6a7&t=' + search;
    this.readApi(this.movieApiUrl).subscribe((data: any) => {
      this.movieData.title = data['Title'];
      this.movieData.description = data['Plot'];
      this.movieData.imageUrl = data['Poster'];
      this.movieData.annee = data['Year'];
      this.movieData.langue = data['Language'];
      this.movieData.genre = data['Genre'];
      this.movieData.pays = data['Country'];
      this.movieData.acteurs = data['Actors'];
      this.movieData.duree = data['Runtime'];
    });
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}