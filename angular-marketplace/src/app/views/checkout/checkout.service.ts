import { Injectable } from '@angular/core';
import { Film } from '../list-films/film.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  public baseUrl: string = 'http://localhost:3001'
  public listFilms: Film[] = [];

  constructor(private httpClient: HttpClient) { }

  getListFilms(){
    return this.httpClient.get(this.baseUrl+'/films');
  }
}
