import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export default class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
