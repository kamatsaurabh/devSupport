import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Issue3Component } from './issue3.component';

describe('Issue1Component', () => {
  let component: Issue3Component;
  let fixture: ComponentFixture<Issue3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Issue3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Issue3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
