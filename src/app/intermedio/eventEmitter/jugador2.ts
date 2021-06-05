import { EventEmitter } from '@angular/core';

export class Jugador2 {
  hp: number;
  hpCambia = new EventEmitter<number>();

  constructor() {
    this.hp = 100;
  }

  recibeGolpe(golpe: number){

    if (golpe >= this.hp) {
      this.hp = 0;

     } else {

      this.hp = this.hp - golpe;
    }
    this.hpCambia.emit(this.hp);
  }
}
