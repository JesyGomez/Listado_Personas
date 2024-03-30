import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  personas: Persona[] = [
    new Persona('Liam', 'González'),
    new Persona('Ethan', 'González'),
    new Persona('Mia', 'González'),
  ];

  saludar = new EventEmitter<number>();

  constructor(private loggingService: LoggingService) {}
  //Si queremos injectar un servicio dentro de otro servicio, primero necesitamos declarar nuestra variable (constructo loggingservice) y aplicar el injectable

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola('Agregamos Persona:' + persona.nombre);
    this.personas.push(persona);
  }
}
