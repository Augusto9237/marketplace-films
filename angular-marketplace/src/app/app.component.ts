import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, NavComponent],
})
export class AppComponent {
  title = 'angular-marketplace';
}
