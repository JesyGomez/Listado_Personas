import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../persona.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css',
  providers: [PersonasService]
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona;
  @Input() indice: number;

  constructor(private personasService:PersonasService) { }

  ngOnInit(): void {
  }

  emitirSaludo(){
    this.personasService.saludar.emit(this.indice); 
  }

}
