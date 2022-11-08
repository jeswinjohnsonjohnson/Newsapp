import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopheadineComponent } from './topheadine.component';

describe('TopheadineComponent', () => {
  let component: TopheadineComponent;
  let fixture: ComponentFixture<TopheadineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopheadineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopheadineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
