import { mensaje } from './string';
// describe('Pruebas de String');

// it('Debe de regresar un string');


describe('Pruebas de Strings', () => {


  it( 'Debe de regresar un String', () => {

    const resp = mensaje('Fernando');
    expect(typeof resp).toBe('string');

  } );


  it( 'Debe de regresar un saludo con el nombre Enviado', () => {

    const nombre = 'Pedro';
    const resp = mensaje(nombre);
    // expect(resp).toBe('Saludos ' + nombre);
    expect(resp).toContain(nombre);

  });

});

