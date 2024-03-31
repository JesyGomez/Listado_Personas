import { Component } from '@angular/core';
import { Persona } from '../../persona.model';
import { FormsModule } from '@angular/forms';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../persona.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  providers: [LoggingService, PersonasService],
})
export class FormularioComponent {
  // este ya no es funcional porque lo conectamos a través del service @Output() personaCreada = new EventEmitter<Persona>();
   nombreInput:string = '';
   apellidoInput:string = '';
  
  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService) {
      this.personasService.saludar.subscribe((indice: number) => alert("El índice es: " + indice)
    );
  }

  ngOnInit() {}

  onAgregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.loggingService.enviaMensajeAConsola(
      'Enviamos persona con nombre: ' +
        persona1.nombre +
        ' y apellido: ' +
        persona1.apellido
    );
    //this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  }

}
