import { obtenerRobots } from './arreglos';
describe('Pruebas de Arreglos', () => {

  it('Debe de retornar al menos 3 Robots', () => {
    const resp = obtenerRobots();
    // expect(resp.length).toBe(3);
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  xit('Deben de existir Megaman y Ultron', () => {

    const resp = obtenerRobots();
    expect(resp).toContain('Megaman');
    expect(resp).toContain('Ultron');

  });

});
