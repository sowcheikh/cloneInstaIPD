import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryIconComponent } from './story-icon.component';

describe('StoryIconComponent', () => {
  let component: StoryIconComponent;
  let fixture: ComponentFixture<StoryIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
