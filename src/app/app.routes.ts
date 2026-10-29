import { Routes } from '@angular/router';
// 1. Importar los componentes de las páginas
import {Home} from './pages/home/home'
import {About} from './pages/about/about'
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { StyleGuide } from './pages/style-guide/style-guide';

// 2. Lista de rutas: qué componente se muestra en cada URL
export const routes: Routes = [
    { path: '', component: Home,title: 'Giovanni | Portafolio' },// localhost:4200/
    { path: 'sobre-mi', component: About,title: 'Sobre mí | Giovanni' },// localhost:4200/sobre-mi
    { path: 'proyectos', component: Projects, title: 'Proyectos | Giovanni' },    // localhost:4200/proyectos
    { path: 'contacto',  component: Contact ,  title: 'Contacto | Giovanni'},     // localhost:4200/contacto
    { path: 'guia',component: StyleGuide, title: 'Gui de estilos | Giovanni'},  // localhost:4200/guia
    { path: '**',        redirectTo: '' },         // cualquier otra URL → Inicio
];
