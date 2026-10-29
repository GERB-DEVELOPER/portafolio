import { Component,signal } from '@angular/core';
import { CONTACT, PROFILE } from '../../data/portfolio.data'; 
import { Reveal } from '../../shared/reveal';
@Component({
  imports: [Reveal],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  contact = CONTACT;     // NUEVO
  profile = PROFILE;     // NUEVO: para las redes sociales
  // NUEVO: ¿ya se envió el mensaje?
  sent = signal(false);

  // NUEVO: se ejecuta al enviar (solo si la validación nativa pasó)
  onSubmit(event: Event, form: HTMLFormElement): void {
    event.preventDefault();      // 1. evita que la página se recargue
    this.sent.set(true);         // 2. muestra el mensaje de éxito
    form.reset();                // 3. limpia los campos
  }

  // NUEVO: volver a mostrar el formulario
  sendAnother(): void {
    this.sent.set(false);
  }
}
