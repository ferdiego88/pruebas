import { Routes } from '@angular/router';
import { HospitalComponent } from '../../intermedio2/hospital/hospital.component';
import { MedicosComponent } from '../../intermedio/espias/medicos.component';
import { IncrementadorComponent } from '../../intermedio2/incrementador/incrementador.component';

export const RUTAS: Routes = [
  {path: 'hospital', component: HospitalComponent},
  { path: 'medico/:id', component: MedicosComponent},
  {path: '**', component: IncrementadorComponent}
];
