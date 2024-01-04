import { Component } from '@angular/core';
import { CardFilmComponent } from "../../components/template/card-film/card-film.component";

@Component({
    selector: 'app-list-films',
    standalone: true,
    templateUrl: './list-films.component.html',
    styleUrl: './list-films.component.css',
    imports: [CardFilmComponent]
})
export class ListFilmsComponent {

}
