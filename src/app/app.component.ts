import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Persona } from './persona.model';
import { CommonModule } from '@angular/common';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    PersonaComponent, 
    FormularioComponent, 
    PersonasComponent,
    HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService, PersonasService, DataServices]
})

export class AppComponent{
  title = 'Listado de Personas';
  
}