import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Persona } from './persona.model';
import { CommonModule } from '@angular/common';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './persona.service';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PersonaComponent, FormularioComponent, PersonasComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService, PersonasService]
})

export class AppComponent{
  title = 'Listado de Personas';
  
}