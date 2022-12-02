import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtodolistComponent } from './viewtodolist.component';

describe('ViewtodolistComponent', () => {
  let component: ViewtodolistComponent;
  let fixture: ComponentFixture<ViewtodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtodolistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
