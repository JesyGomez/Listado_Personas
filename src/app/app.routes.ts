import { Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';

export const routes: Routes = [
    {path: '', component: PersonasComponent},
    {path: 'personas', component: PersonasComponent},
    {path: 'personas/agregar', component: FormularioComponent},
    {path: 'personas/:id', component: PersonasComponent},
];
