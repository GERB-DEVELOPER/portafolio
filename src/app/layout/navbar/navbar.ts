import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  
  imports: [RouterLink,RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {  profile = PROFILE;
}
