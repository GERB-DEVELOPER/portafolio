import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

/**
 * Directiva appReveal: el elemento aparece suavemente
 * cuando entra en pantalla al hacer scroll.
 * Uso: <div appReveal>  o  <div appReveal [revealDelay]="200">
 */
@Directive({
  selector: '[appReveal]'
})
export class Reveal implements OnInit, OnDestroy {
  // Retraso opcional en milisegundos (se recibe desde el HTML)
  revealDelay = input(0);

  // El elemento HTML donde se puso appReveal
  private element: HTMLElement = inject(ElementRef).nativeElement;

  // El "sensor" que avisa cuando el elemento entra en pantalla
  private observer: IntersectionObserver | undefined;

  ngOnInit(): void {
    // 1. Estado inicial: invisible y desplazado (clase .reveal en styles.css)
    this.element.classList.add('reveal');
    this.element.style.transitionDelay = `${this.revealDelay()}ms`;

    // 2. Crear el sensor
    this.observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // 3. Entró en pantalla: aparece (clase .is-visible)
          this.element.classList.add('is-visible');
          // 4. Solo una vez: deja de vigilar
          this.observer?.disconnect();
        }
      }
    }, { threshold: 0.15 });     // avisa cuando se ve el 15 % del elemento

    // 5. Empezar a vigilar el elemento
    this.observer.observe(this.element);
  }

  // Al salir de la página: dejar de vigilar
  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
