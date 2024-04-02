import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "./persona.model";
import { Observable } from "rxjs";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices{
    constructor(private httpCliente:HttpClient,
        private loginService: LoginService){}
    cargarPersonas():Observable<any>{
        const token = this.loginService.getIdToken();
        return this.httpCliente.get('https://listado-personas-3b07b-default-rtdb.firebaseio.com/datos.json?auth=' + token);
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
        const token = this.loginService.getIdToken();
        this.httpCliente.put('https://listado-personas-3b07b-default-rtdb.firebaseio.com/datos.json?auth=' + token, personas).subscribe(
            response => {
                console.log("resultado de guardar las personas" + response)
                    }
             );
    }

    modificarPersona(index: number, persona:Persona){
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listado-personas-3b07b-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.httpCliente.put(url, persona)
        .subscribe(
            response => console.log("resultado de modificar el objeto persona: " + response)
        );
    }

    eliminarPersona(index:number){
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listado-personas-3b07b-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.httpCliente.delete(url)
        .subscribe(
            response => console.log("resultado de eliminar persona: " + response)
        );
    }
}