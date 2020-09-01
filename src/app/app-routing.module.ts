import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagenesComponent } from './imagenes/imagenes.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { TituloComponent } from './titulo/titulo.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'titulo',     component: TituloComponent },
  { path: 'menu',       component: MenuComponent },
  { path: 'imagenes',   component: ImagenesComponent },
  { path: 'personajes', component: PersonajesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
