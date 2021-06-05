import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import {from, empty, Observable } from 'rxjs';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });

    it('Init: Debe de cargar los medicos', () => {
        const medicos = ['medico1', 'medico2', 'medico3'];
        spyOn(servicio, 'getMedicos').and.callFake( () => {
          return from( [ medicos ] );
        } );
        componente.ngOnInit();

        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Debe llamar al servidor para agregar un Medico', () => {
        const espia = spyOn(servicio, 'agregarMedico').and.callFake( medico =>  {
           return empty();
        });
        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();
    });

    it('Debe de agregar un nuevo médico al arreglo de Medicos', () => {

      const medico = { id: 1, nombre: 'Juan'};

      spyOn(servicio, 'agregarMedico')
            .and.returnValue(from([medico]));
      componente.agregarMedico();

      expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

});
