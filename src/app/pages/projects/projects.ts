import { Component, computed, signal } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';
@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  projects = PROJECTS;  
   // ===== FILTRO ===== (todo lo de abajo es NUEVO)

  // Lista de botones: 'Todos' + cada tecnología, sin repetir
  //   1. flatMap junta las tecnologías de todos los proyectos en una sola lista
  //   2. new Set(...) quita las repetidas
  //   3. [...] las convierte en array, con 'Todos' al inicio
  technologies = ['Todos', ...new Set(this.projects.flatMap(project => project.tech))];

  // ESTADO: la tecnología seleccionada. Empieza en 'Todos'
  selectedTech = signal('Todos');

  // ESTADO DERIVADO: los proyectos que se muestran.
  // Se recalcula solo cada vez que cambia selectedTech
  filteredProjects = computed(() => {
    const tech = this.selectedTech();

    if (tech === 'Todos') {
      return this.projects;
    }
    return this.projects.filter(project => project.tech.includes(tech));
  });

  // Se ejecuta al hacer clic en un botón del filtro
  selectTech(tech: string): void {
    this.selectedTech.set(tech);
  }
}
