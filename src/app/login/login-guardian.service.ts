import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Observable } from 'rxjs';
//getAuth: para obtener la instancia de autenticación de Firebase.
//onAuthStateChanged: para escuchar los cambios en el estado de autenticación del usuario.

@Injectable({
  providedIn: 'root' // agrego esto para registrar el guardián globalmente
})
export class LoginGuardian {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> {//El observable emite true si el usuario está autenticado y false si no lo está.
    return new Observable(observer => {//Creo un nuevo observable que utiliza la función observer para suscribirse a los cambios en el estado de autenticación.
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {//Se llama cada vez que el estado de autenticación cambia (por ejemplo, el usuario inicia sesión o cierra sesión)
        if (!user) {//Si el usuario no está autenticado, se le redirige a la página de inicio de sesión
          this.router.navigate(['/login']);
          observer.next(false);
        } else {
          observer.next(true);
        }
      });
    });
  }
}
