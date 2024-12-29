import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTakerComponent } from './news-taker.component';

describe('NewsTakerComponent', () => {
  let component: NewsTakerComponent;
  let fixture: ComponentFixture<NewsTakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsTakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
