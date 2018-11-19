import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondScreenComponentComponent } from './second-screen-component.component';

describe('SecondScreenComponentComponent', () => {
  let component: SecondScreenComponentComponent;
  let fixture: ComponentFixture<SecondScreenComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondScreenComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondScreenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
