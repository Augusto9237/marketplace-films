import { Component, OnInit } from '@angular/core';
import { CardFilmComponent } from "../../components/template/card-film/card-film.component";
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { CheckoutService } from '../checkout/checkout.service';
import { Film } from './film.model';

@Component({
  selector: 'app-list-films',
  standalone: true,
  templateUrl: './list-films.component.html',
  styleUrl: './list-films.component.css',
  imports: [CardFilmComponent, MatCardModule, MatButtonModule, RouterModule, MatBadgeModule]
})
export class ListFilmsComponent implements OnInit {
  listFilms: Film[] = [];
  listSelectedFilms!: number;
  hidden = false;

  constructor(private checkoutService: CheckoutService, private route: Router) { }

  ngOnInit(): void {
    this.checkoutService.totalPrice = 0;
    this.checkoutService.listSelectedFilms = [];
    this.checkoutService.getListFilms().subscribe((film) => {
      this.listFilms = film;
    })
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  toggleCount() {
    return this.listSelectedFilms = this.checkoutService.listSelectedFilms.length
  }

  toCheckout(): void {
    this.route.navigate(['/checkout']);
  }
}
