import { Component } from '@angular/core';

interface Film {
  title: string;
  image: string;
}

interface FilmSection {
  section: string;
  films: Film[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public top10Films: FilmSection = {
    section: 'Top 10',
    films: [
      {
        title: 'La Casa de Papel',
        image: 'assets/images/Top10/1-papel.webp'
      },
      {
        title: 'La Reina del Flow',
        image: 'assets/images/Top10/2-reina.webp'
      },
      {
        title: 'Titanes',
        image: 'assets/images/Top10/3-titanes.webp'
      },
      {
        title: 'Lost In Space',
        image: 'assets/images/Top10/4-lostinspace.webp'
      },
      {
        title: 'Donde Caben Dos',
        image: 'assets/images/Top10/5-dondecaben.webp'
      },
      {
        title: 'Aquí No Hay Quien Viva',
        image: 'assets/images/Top10/6-aquinohay.webp'
      },
      {
        title: 'Blacklist',
        image: 'assets/images/Top10/7-blacklist.webp'
      },
      {
        title: 'Ricos y Mimados',
        image: 'assets/images/Top10/8-ricos.webp'
      },
      {
        title: 'El Poder del Perro',
        image: 'assets/images/Top10/9-poder.webp'
      },
      {
        title: 'The Good Doctor',
        image: 'assets/images/Top10/10-gooddoctor.webp'
      }
    ]
  };

  public animeFilms: FilmSection = {
    section: 'Anime',
    films: [
      {
        title: 'Ajin',
        image: 'assets/images/Anime/ajin.jpg'
      },
      {
        title: 'El castillo ambulante',
        image: 'assets/images/Anime/castilloambulante.webp'
      },
      {
        title: 'Chihiro',
        image: 'assets/images/Anime/chihiro.webp'
      },
      {
        title: 'Evangelion',
        image: 'assets/images/Anime/evangelion.webp'
      },
      {
        title: 'Git sarise',
        image: 'assets/images/Anime/gitsarise.webp'
      },
      {
        title: 'Gundam',
        image: 'assets/images/Anime/gundam.webp'
      },
      {
        title: 'Laputa',
        image: 'assets/images/Anime/laputa.webp'
      },
      {
        title: 'Mononoke',
        image: 'assets/images/Anime/mononoke.webp'
      },
      {
        title: 'Nino kuni',
        image: 'assets/images/Anime/ninokuni.jpg'
      },
      {
        title: 'Perfect blue',
        image: 'assets/images/Anime/perfectblue.webp'
      }
    ]
  };

  public actionFilms: FilmSection = {
    section: 'Action',
    films: [
      {
        title: 'Ejército de los muertos',
        image: 'assets/images/Accion/ejercitomuertos.jpg'
      },
      {
        title: 'El protector',
        image: 'assets/images/Accion/elprotector.webp'
      },
      {
        title: 'Equalizador 2',
        image: 'assets/images/Accion/equalizer2.webp'
      },
      {
        title: 'Heat',
        image: 'assets/images/Anime/evangelion.webp'
      },
      {
        title: 'Jack reacher',
        image: 'assets/images/Anime/gitsarise.webp'
      },
      {
        title: 'John wick 2',
        image: 'assets/images/Anime/gundam.webp'
      },
      {
        title: 'Kill Bill 2',
        image: 'assets/images/Anime/laputa.webp'
      },
      {
        title: 'Mision Imposible',
        image: 'assets/images/Anime/mononoke.webp'
      },
      {
        title: 'Renacido',
        image: 'assets/images/Accion/renacido.webp'
      },
      {
        title: 'Terminator 2',
        image: 'assets/images/Accion/terminator2.webp'
      },
      {
        title: 'Worldwarz',
        image: 'assets/images/Accion/worldwarz.webp'
      }
    ]
  };
}
