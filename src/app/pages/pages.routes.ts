import { Routes } from '@angular/router';

import PagesComponent from './pages.component';
import DashboardComponent from './dashboard/dashboard.component';
import ProgressComponent from './progress/progress.component';
import Grafica1Component from './grafica1/grafica1.component';

export const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'progress',
        component: ProgressComponent,
      },
      {
        path: 'grafica1',
        component: Grafica1Component,
      },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },
];
