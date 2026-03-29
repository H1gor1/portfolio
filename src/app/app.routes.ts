import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Links } from './components/links/links';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'contact',
    component: Links,
  },
];
