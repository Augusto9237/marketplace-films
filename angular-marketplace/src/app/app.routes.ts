import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ListFilmsComponent } from './views/list-films/list-films.component';
import { CheckoutComponent } from './views/checkout/checkout.component';

export const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
  {
    path: 'list-films',
    component: ListFilmsComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];
