import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Issue1Component } from './issue2.component';

describe('Issue1Component', () => {
  let component: Issue1Component;
  let fixture: ComponentFixture<Issue1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Issue1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Issue1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
