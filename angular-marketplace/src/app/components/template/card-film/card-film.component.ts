import { Component, OnInit } from '@angular/core';
import { Film } from '../../../views/list-films/film.model';
import { CommonModule } from "@angular/common";
import { CheckoutService } from '../../../views/checkout/checkout.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-film',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './card-film.component.html',
  styleUrl: './card-film.component.css'
})
export class CardFilmComponent implements OnInit{
  listFilms: Film[] = [];
  constructor(private checkoutService: CheckoutService) {}

  ngOnInit() {
    this.checkoutService.getListFilms().subscribe((film) => {
      this.listFilms = film;
      console.log(this.listFilms);
    });

  }
}
