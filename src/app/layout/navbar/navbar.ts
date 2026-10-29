import { Component,signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  
  imports: [RouterLink,RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  profile = PROFILE;

  // ===== MODO OSCURO ===== (NUEVO)

  // Empieza con el tema que dejó el script de index.html
  isDark = signal(document.documentElement.getAttribute('data-theme') === 'dark');

  toggleTheme(): void {
    this.isDark.update(dark => !dark);                          // invierte
    const theme = this.isDark() ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme); // cambia los colores
    localStorage.setItem('theme', theme);                       // lo recuerda
  }
    // ===== MENÚ PARA CELULAR ===== (NUEVO)
  menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

}
