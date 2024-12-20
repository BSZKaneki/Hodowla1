import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurdogsComponent } from './ourdogs.component';

describe('OurdogsComponent', () => {
  let component: OurdogsComponent;
  let fixture: ComponentFixture<OurdogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurdogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurdogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
