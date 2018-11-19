import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdScreenComponentComponent } from './third-screen-component.component';

describe('ThirdScreenComponentComponent', () => {
  let component: ThirdScreenComponentComponent;
  let fixture: ComponentFixture<ThirdScreenComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdScreenComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdScreenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
