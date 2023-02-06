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
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent {
  @Input() filmsList: FilmSection = {section: '', films: []};
}
