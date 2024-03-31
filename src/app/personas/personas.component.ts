import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';
import { Router, RouterOutlet } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [CommonModule, PersonaComponent, FormularioComponent, RouterOutlet],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent implements OnInit{
  personas: Persona[] = [];
  
  constructor(
    private personasService: PersonasService,
    private router: Router
    ){}
  
    ngOnInit(): void {
      this.personas = this.personasService.personas;
    }

    agregar(){
    this.router.navigate(['personas/agregar']);
    }
}
