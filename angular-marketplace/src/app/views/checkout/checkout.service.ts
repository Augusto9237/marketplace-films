import { Injectable } from '@angular/core';
import { Film } from '../list-films/film.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  public baseUrl: string = 'http://localhost:3001'
  public listFilms: Film[] = [];
  public totalPrice: number = 0;
  private _priceHandler: number = 0;
  public listSelectedFilms: Film[] = [];


  getPrice(): number {
    return this._priceHandler;
  }

  setPrice(value: number): void {
    this._priceHandler = value;
  }

  private _filmHandler!: Film;

  getFilm(): Film {
    return this._filmHandler;
  }

  setFilm(value: Film) {
    this._filmHandler = value;
  }

  constructor(private httpClient: HttpClient, private snakBar : MatSnackBar) { }

  showMessage(message: string, isError: boolean): void {
    this.snakBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['error'] : ['success']
    })

  }

  getListFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(this.baseUrl + '/films');
  }

  selectFilm() {
    setTimeout(() => {
      this.totalPrice += this.getPrice();
      this.listSelectedFilms.push(this.getFilm());
    }, 1)
  }

  unselectFilm() {
    this.totalPrice -= this.getPrice();
    if (this.totalPrice < 0) {
      this.totalPrice = 0;
    }
    let index = this.listSelectedFilms.indexOf(this.getFilm());
    if (index > -1 || index === this.listSelectedFilms.lastIndexOf(this.getFilm())) {
      this.listSelectedFilms.splice(index, 1);
    }
  }
}
