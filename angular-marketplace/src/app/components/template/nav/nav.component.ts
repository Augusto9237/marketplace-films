import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from "../../../views/home/home.component";

const appRoutes: Routes = [{
  path: '/',
  component: HomeComponent,
}];

@Component({
    selector: 'app-nav',
    standalone: true,
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
    imports: [MatSidenavModule, MatListModule, HomeComponent, RouterModule]
})
export class NavComponent {

}
