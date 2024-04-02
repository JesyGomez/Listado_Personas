import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    PersonaComponent, 
    FormularioComponent, 
    PersonasComponent,
    HttpClientModule,
    LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService, PersonasService, DataServices, LoginService]
})

export class AppComponent implements OnInit{
  title = 'Listado de Personas';

  ngOnInit(): void {

    firebase.initializeApp({
      apiKey: "AIzaSyAoTWB635XctAIDbikokaKpEFEMxsv4jjk",
      authDomain: "listado-personas-3b07b.firebaseapp.com",

    })

    // const firebaseConfig = {
    //   apiKey: "AIzaSyAoTWB635XctAIDbikokaKpEFEMxsv4jjk",
    //   authDomain: "listado-personas-3b07b.firebaseapp.com",
    //   // databaseURL: "https://listado-personas-3b07b-default-rtdb.firebaseio.com",
    //   // projectId: "listado-personas-3b07b",
    //   // storageBucket: "listado-personas-3b07b.appspot.com",
    //   // messagingSenderId: "1036371337395",
    //   // appId: "1:1036371337395:web:9a56c65f2438afe90610c6"
    // };
    
    // // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
  
  }
  
  
  
  
}