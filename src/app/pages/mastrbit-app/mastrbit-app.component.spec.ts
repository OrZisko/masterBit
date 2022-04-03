import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastrbitAppComponent } from './mastrbit-app.component';

describe('MastrbitAppComponent', () => {
  let component: MastrbitAppComponent;
  let fixture: ComponentFixture<MastrbitAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastrbitAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MastrbitAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
