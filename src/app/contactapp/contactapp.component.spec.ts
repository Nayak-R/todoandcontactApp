import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactappComponent } from './contactapp.component';

describe('ContactappComponent', () => {
  let component: ContactappComponent;
  let fixture: ComponentFixture<ContactappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
