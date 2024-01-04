import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ListFilmsComponent } from './views/list-films/list-films.component';

export const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
  {
    path: 'list-films',
    component: ListFilmsComponent,
  },
];
