import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Persona } from './persona.model';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './persona.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PersonaComponent, FormularioComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService, PersonasService]
})

export class AppComponent implements OnInit{
  title = 'Listado de Personas';
  personas: Persona[] = [];
  
  constructor(private loggingService: LoggingService, 
    private personasService: PersonasService){}
  
    ngOnInit(): void {
      this.personas = this.personasService.personas;
    }

}