import { Component, OnDestroy, OnInit, signal } from '@angular/core';

import { RouterLink } from '@angular/router';             // NUEVO: el botón "Ver proyectos" usa routerLink
import { HIGHLIGHTS, PROFILE } from '../../data/portfolio.data';      // NUEVO: los datos personales
import { Reveal } from '../../shared/reveal';


@Component({
  imports: [RouterLink,Reveal],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit, OnDestroy  {
    profile = PROFILE;     // NUEVO: la plantilla lee "profile"
    highlights = HIGHLIGHTS;

   // ===== MÁQUINA DE ESCRIBIR ===== (todo lo de abajo es NUEVO)

  // Texto que se ve en pantalla. Es un signal: al cambiar, Angular redibuja
  typedText = signal('');

  // Estado interno (private: la plantilla no lo usa)
  private roleIndex = 0;        // qué rol de la lista se está escribiendo
  private charIndex = 0;        // cuántas letras se muestran
  private deleting = false;     // false = escribiendo, true = borrando
  private timerId: ReturnType<typeof setTimeout> | undefined;   // para poder cancelar el temporizador

  // Velocidades en milisegundos
  private readonly typeSpeed = 90;      // escribir una letra
  private readonly deleteSpeed = 45;    // borrar una letra (más rápido)
  private readonly pauseAtEnd = 1800;   // pausa con la palabra completa
  private readonly pauseAtStart = 400;  // pausa antes de la siguiente palabra

  // Se ejecuta una vez, cuando se crea el componente: arranca la animación
  ngOnInit(): void {
    this.tick();
  }

  // Se ejecuta cuando se sale del Inicio: detiene el temporizador
  ngOnDestroy(): void {
    clearTimeout(this.timerId);
  }

  // Un "paso" de la animación: escribe o borra UNA letra y programa el siguiente paso
  private tick(): void {
    const role = this.profile.roles[this.roleIndex];   // rol actual
    let delay = this.typeSpeed;                         // espera hasta el próximo paso

    if (!this.deleting) {
      // ESCRIBIENDO: una letra más
      this.charIndex++;

      if (this.charIndex === role.length) {
        // Palabra completa: pausa y luego empezar a borrar
        this.deleting = true;
        delay = this.pauseAtEnd;
      }
    } else {
      // BORRANDO: una letra menos
      this.charIndex--;
      delay = this.deleteSpeed;

      if (this.charIndex === 0) {
        // Palabra borrada: pasar al siguiente rol (al llegar al último, vuelve al primero)
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.profile.roles.length;
        delay = this.pauseAtStart;
      }
    }

    // Mostrar las primeras "charIndex" letras del rol
    this.typedText.set(role.slice(0, this.charIndex));

    // Programar el siguiente paso
    this.timerId = setTimeout(() => this.tick(), delay);
  }
}
