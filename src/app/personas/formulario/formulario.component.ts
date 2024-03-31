import { Component } from '@angular/core';
import { Persona } from '../../persona.model';
import { FormsModule } from '@angular/forms';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  // este ya no es funcional porque lo conectamos a través del service @Output() personaCreada = new EventEmitter<Persona>();
   nombreInput:string = '';
   apellidoInput:string = '';
   index: number;
  
  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
    ) {
      this.personasService.saludar.subscribe((indice: number) => alert("El índice es: " + indice)
    );
  }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    if(this.index){
     let persona: Persona = this.personasService.encontrarPersona(this.index);
     this.nombreInput = persona.nombre;
     this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.index){
      this.personasService.modificarPersona(this.index, persona1);
    }else{
      this.personasService.agregarPersona(persona1);
    }
    this.router.navigate(['personas'])
  }

}
