import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppnewComponent } from './appnew.component';

describe('AppnewComponent', () => {
  let component: AppnewComponent;
  let fixture: ComponentFixture<AppnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppnewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
