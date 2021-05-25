import { Jugador } from './clase';
describe('Prueba de Clase', () => {
  let jugador = new Jugador();

  // Ciclo de Vida:

  beforeAll( () => {
    console.log( 'beforeAll' );
  } );
  beforeEach( () => {
    // jugador.hp = 100;
    jugador = new Jugador();
    console.log( 'beforeEach' );
  } );
  afterAll( () => {
    console.log( 'afterAll' );
  } );
  afterEach( () => {
    // jugador.hp = 100;
    console.log( 'afterEach' );
  } );
  it('Debe retornar 80 de Hp si recibe 20 de daño', () => {
      // const jugador = new Jugador();
      const resp = jugador.recibeGolpe(20);
      expect(resp).toBe(80);
  });

  it('Debe retornar 50 de Hp si recibe 50 de daño', () => {
    const resp = jugador.recibeGolpe(50);
    expect(resp).toBe(50);
  });

  it('Debe retornar 0 de Hp si recibe 100 de daño o más', () => {
    // console.log('Esta prueba va a fallar');
    const resp = jugador.recibeGolpe(100);
    expect(resp).toBe(0);
  });

});
