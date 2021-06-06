import { RUTAS } from './app.routes';
import { MedicosComponent } from '../../intermedio/espias/medicos.component';
describe('Rutas Principales', () => {

  it('Debe de existir la ruta /medico/:id', () =>  {

    expect(RUTAS).toContain(
      { path: 'medico/:id', component: MedicosComponent},
    )
  });
});
