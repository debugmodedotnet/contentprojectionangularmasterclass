import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthmessageComponent } from './authmessage.component';

describe('AuthmessageComponent', () => {
  let component: AuthmessageComponent;
  let fixture: ComponentFixture<AuthmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
