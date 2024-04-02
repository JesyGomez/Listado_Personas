import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
import { LoginGuardian } from './login/login-guardian.service';

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
  providers: [LoggingService, PersonasService, DataServices, LoginService, LoginGuardian]
})

export class AppComponent implements OnInit{
  title = 'Listado de Personas';
  isLoggedOut = false;

  constructor(private loginService: LoginService, 
    private router: Router){}
    
  ngOnInit(): void {
    if (!this.isAutenticado()) {
      this.isLoggedOut = true;
    }
    firebase.initializeApp({
      apiKey: "AIzaSyAp0goRI4T8cJV9JenCK49qdGhUpxwb7gA",
      authDomain: "listado-personas-89041.firebaseapp.com",
    })}

    redireccionarALogin(): void {
      this.router.navigate(['/login']);
    }
    isAutenticado(){
     return this.loginService.isAutenticado();
    }
    restablecerIsLoggedOut(): void {
      this.isLoggedOut = false;
    }
    
    salir(){
    this.loginService.logout();
    this.isLoggedOut = true;
    this.router.navigate(['/login']); // Redirige al usuario al login
    }
  }
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
  
  