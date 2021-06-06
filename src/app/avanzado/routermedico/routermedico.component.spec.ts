import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { empty, Observable, Subject } from 'rxjs';

import { RoutermedicoComponent } from './routermedico.component';

class FakeRouter{
  navigate(params){

  }
}

class FakeActivatedRoute {
  // params: Observable<any> = empty();
  private subject = new Subject();

  push(valor) {
    this.subject.next(valor);
  }

  get params(){
    return this.subject.asObservable();
  }
}

describe('RoutermedicoComponent', () => {
  let component: RoutermedicoComponent;
  let fixture: ComponentFixture<RoutermedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutermedicoComponent ],
      providers: [
        {provide: Router, useClass: FakeRouter },
        {provide: ActivatedRoute, useClass: FakeActivatedRoute}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutermedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar al medico cuando se guarde', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe de colocar el id= nuevo', () => {

    component = fixture.componentInstance;
    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);

    activatedRoute.push({id: 'nuevo'} );

    expect(component.id).toBe('nuevo');
  })
});
