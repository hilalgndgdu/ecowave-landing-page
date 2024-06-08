import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
// script.ts
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.toggle-button') as HTMLElement;
  const navbarLinks = document.querySelector('.navbar-links') as HTMLElement;

  toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
  });
});
