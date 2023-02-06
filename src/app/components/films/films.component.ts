import { Component, Input } from '@angular/core';

interface Film {
  title: string;
  image: string;
}

interface FilmSection {
  section: string;
  films: Film[];
}

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})

export class FilmsComponent {
  @Input() filmsList: FilmSection = {section: '', films: []};
}
