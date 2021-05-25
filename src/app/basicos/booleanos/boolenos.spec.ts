import { usuarioIngresado } from './booleanos';

describe('Pruebas para Booleanos', () => {

    it('Debe de retornar True', () => {
      const resp = usuarioIngresado();
      // expect(resp).toBe(true);
      // expect(resp).toBeFalsy();
      // expect(resp).not.toBeTruthy();
      expect(resp).toBeTruthy();
    });

});
