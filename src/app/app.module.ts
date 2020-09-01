import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CharacterService } from './character.service';
import { MenuComponent } from './menu/menu.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { TituloComponent } from './titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImagenesComponent,
    PersonajesComponent,
    TituloComponent,
      ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],

  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
