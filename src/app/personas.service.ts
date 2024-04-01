import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { DataServices } from './data.services';

@Injectable()
export class PersonasService {
  // [x: string]: any;
  personas: Persona[] = [];

  saludar = new EventEmitter<number>();

  constructor(private loggingService: LoggingService,
    private dataServices:DataServices) {}
  //Si queremos injectar un servicio dentro de otro servicio, primero necesitamos declarar nuestra variable (constructo loggingservice) y aplicar el injectable

  setPersonas(personas: Persona[]){
    this.personas = personas;
  }

  obtenerPersonas(){
    return this.dataServices.cargarPersonas();
  }

  agregarPersona(persona: Persona) {
    this.loggingService.enviaMensajeAConsola('Agregamos Persona:' + persona.nombre);
    if(this.personas == null){
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas);

  }

  encontrarPersona(index: number){
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index:number, persona:Persona){
    let persona1 = this.personas[index];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataServices.modificarPersona(index, persona);
  }
  
  eliminarPersona(index:number){
    this.personas.splice(index,1);
  }

}
