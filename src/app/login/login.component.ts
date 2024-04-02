import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService,
    private appComponent: AppComponent) {}
  

  ngOnInit() {
  }

  onLogin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    console.log(email);
    console.log(password);
    this.loginService.login(email, password);
    this.appComponent.restablecerIsLoggedOut(); 
  }
 
}
