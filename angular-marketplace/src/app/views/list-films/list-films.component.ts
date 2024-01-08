import { Component, OnInit } from '@angular/core';
import { CardFilmComponent } from "../../components/template/card-film/card-film.component";
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CheckoutService } from '../checkout/checkout.service';
import { Film } from './film.model';

@Component({
  selector: 'app-list-films',
  standalone: true,
  templateUrl: './list-films.component.html',
  styleUrl: './list-films.component.css',
  imports: [CardFilmComponent, MatCardModule, RouterModule]
})
export class ListFilmsComponent implements OnInit {
  listFilms: Film[] = []

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.checkoutService.getListFilms().subscribe((film) => {
      this.listFilms = film;
    })
  }
}
