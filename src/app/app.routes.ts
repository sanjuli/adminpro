import { Routes } from '@angular/router';

import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import RegisterComponent from './auth/register/register.component';
import LoginComponent from './auth/login/login.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.routes').then((m) => m.pagesRoutes),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent }, // Wildcard route
];
