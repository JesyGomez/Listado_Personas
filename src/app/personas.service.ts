import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  // [x: string]: any;
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

  encontrarPersona(index: number){
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index:number, persona:Persona){
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }
  eliminarPersona(index:number){
    this.personas.splice(index,1);
  }

}
