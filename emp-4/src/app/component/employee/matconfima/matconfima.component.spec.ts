import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatconfimaComponent } from './matconfima.component';

describe('MatconfimaComponent', () => {
  let component: MatconfimaComponent;
  let fixture: ComponentFixture<MatconfimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatconfimaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatconfimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
