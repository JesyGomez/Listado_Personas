import { Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', component: PersonasComponent},
    {path: 'personas', component: PersonasComponent, children: [
    {path: 'agregar', component: FormularioComponent},
    {path: ':id', component: FormularioComponent},
]},

{path: 'login', component: LoginComponent},
{path: '**', component: ErrorComponent},

]
