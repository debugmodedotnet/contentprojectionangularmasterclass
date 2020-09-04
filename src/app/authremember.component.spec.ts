import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthrememberComponent } from './authremember.component';

describe('AuthrememberComponent', () => {
  let component: AuthrememberComponent;
  let fixture: ComponentFixture<AuthrememberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthrememberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthrememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
