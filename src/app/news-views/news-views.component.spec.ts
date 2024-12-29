import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsViewsComponent } from './news-views.component';

describe('NewsViewsComponent', () => {
  let component: NewsViewsComponent;
  let fixture: ComponentFixture<NewsViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsViewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
