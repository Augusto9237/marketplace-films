import { Component, OnInit } from '@angular/core';
import { Film } from '../list-films/film.model';
import { CommonModule } from "@angular/common";
import { CheckoutService } from './checkout.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [MatCardModule, MatButtonToggleModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  listSelectedFilms: Film[] = []
  totalPrice!: number;
  disabled: boolean = false
  hide: boolean = true
  form: any

  constructor(private checkoutService: CheckoutService, private route: Router) { }

  ngOnInit(): void {
    this.totalPrice = this.checkoutService.totalPrice
    this.listSelectedFilms = this.checkoutService.listSelectedFilms

    this.toggleButton()
  }

  payment():void{
    this.checkoutService.showMessage("Payment!", true);
    this.route.navigate(['/list-films'])
  }

  cancel():void{
    this.route.navigate(['/list-films'])
  }

  toggleButton() {
    if (this.listSelectedFilms.length === 0) {
      this.disabled = true
    }
  }

  exclude(film: Film):void {
    this.totalPrice -= film.price
    this.checkoutService.setFilm(film);
    this.checkoutService.unselectFilm();
    if (this.totalPrice <= 0) {
      this.excludeAll()
    }
  }

  excludeAll() {
    this.checkoutService.totalPrice = 0;
    this.totalPrice = 0;
    this.checkoutService.listSelectedFilms = [];
    this.listSelectedFilms = [];
    this.toggleButton();
  }
}
