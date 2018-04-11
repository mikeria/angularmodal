import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpowerDialogComponent } from './npower-dialog.component';

describe('NpowerDialogComponent', () => {
  let component: NpowerDialogComponent;
  let fixture: ComponentFixture<NpowerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpowerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpowerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
