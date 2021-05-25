import { incrementar } from './numeros';
describe('Pruebas de Numeros', () =>  {

  it('Retorna 100 si el numero es mayor a 100', () => {
    const res = incrementar(300);
    expect(res).toBe(100);
  });

  it('Retorna el numero + 1 si no es mayor a 100', () => {
    const res = incrementar(50);
    expect(res).toBe(51);
  });
});
