import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Persona } from '../persona.model';
import { PersonasService } from '../persona.service';
import { LoggingService } from '../LoggingService.service';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [CommonModule, PersonaComponent, FormularioComponent],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent implements OnInit{
  personas: Persona[] = [];
  
  constructor(private loggingService: LoggingService, 
    private personasService: PersonasService){}
  
    ngOnInit(): void {
      this.personas = this.personasService.personas;
    }
}
