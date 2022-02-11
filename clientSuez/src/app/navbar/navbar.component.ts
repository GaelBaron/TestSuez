import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  switchSelect = 0;

  ngOnInit(): void {
  }

  switchToZero(): void {
    this.switchSelect = 0;
  }

  switchToOne(): void {
    this.switchSelect = 1;
  }

  switchToTwo(): void {
    this.switchSelect = 2;
  }

  switchToThree(): void {
    this.switchSelect = 3;
  }

}
