import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "./persona.model";
import { Observable } from "rxjs";

@Injectable()
export class DataServices{
    constructor(private httpCliente:HttpClient){ }

    cargarPersonas():Observable<any>{
        return this.httpCliente.get('https://listado-personas-3b07b-default-rtdb.firebaseio.com/datos.json');
    }
// Otra posible solución para cuando me pide tipo de dato de llamar los datos de los elementos desde la BD
// //data.services.ts
// cargarPersonas(){
//     return this.httpClient.get<Persona[]>('urldatabase/json');
// }
// //personas.service.ts
// obtenerPersonas() : Observable<Persona[]> {
//     return this.dataServices.cargarPersonas();
// }
// //personas.component.ts
// ngOnInit(): void {
//     this.personasService.obtenerPersonas()
//     .subscribe(
//       (personas : Persona[]=[]) => {
//         //Cargamos los datos de la base de datos al arreglo de personas local 
//         this.personas = personas;
//         this.personasService.setPersonas(this.personas);
//       }
//     );
//   }
    //Guardar Personas
    guardarPersonas(personas:Persona[]){
        this.httpCliente.put('https://listado-personas-3b07b-default-rtdb.firebaseio.com/datos.json', personas).subscribe(
            response => {
                console.log("resultado de guardar las personas" + response);
            },
            error => console.log("Error al guardar personas: " + error)
        );
    }
}