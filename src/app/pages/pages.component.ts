import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [
    RouterOutlet,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css',
})
export default class PagesComponent {}
