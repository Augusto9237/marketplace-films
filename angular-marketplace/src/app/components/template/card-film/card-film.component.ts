import { Component, OnInit } from '@angular/core';
import { Film } from '../../../views/list-films/film.model';
import { CommonModule } from "@angular/common";
import { CheckoutService } from '../../../views/checkout/checkout.service';
import { MatCardModule } from '@angular/material/card';
import { SelectButtonComponent } from "../select-button/select-button.component";

@Component({
    selector: 'app-card-film',
    standalone: true,
    templateUrl: './card-film.component.html',
    styleUrl: './card-film.component.css',
    imports: [MatCardModule, CommonModule, SelectButtonComponent]
})
export class CardFilmComponent implements OnInit{
  listFilms: Film[] = [];
  constructor(private checkoutService: CheckoutService) {}

  ngOnInit() {
    this.checkoutService.getListFilms().subscribe((film) => {
      this.listFilms = film;
    });
  }

  selectFilm(film: Film):void {
    this.checkoutService.setFilm(film);
    this.checkoutService.setPrice(film.price);

  }
}
