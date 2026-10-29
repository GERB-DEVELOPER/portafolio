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

    // ===== PALETA DE COLORES (NUEVO) =====

  // Las 4 paletas de styles.css, con su color para el circulito
  palettes = [
    { id: 'azul',      label: 'Azul',      color: '#2563EB' },
    { id: 'esmeralda', label: 'Esmeralda', color: '#047857' },
    { id: 'violeta',   label: 'Violeta',   color: '#7C3AED' },
    { id: 'grafito',   label: 'Grafito',   color: '#71717A' },
  ];

  // Paleta actual: se lee de <html>
  palette = signal(document.documentElement.getAttribute('data-palette') ?? 'azul');

  // ¿Está abierta la lista de paletas?
  paletteOpen = signal(false);

  togglePaletteMenu(): void {
    this.paletteOpen.update(open => !open);
  }

  setPalette(id: string): void {
    this.palette.set(id);
    document.documentElement.setAttribute('data-palette', id);   // cambia los colores de todo el sitio
    localStorage.setItem('palette', id);                         // la recuerda para la próxima visita
    this.paletteOpen.set(false);                                 // cierra la lista
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
