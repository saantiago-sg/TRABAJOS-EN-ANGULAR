import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextMoviesComponent } from './next-movies.component';

describe('NextMoviesComponent', () => {
  let component: NextMoviesComponent;
  let fixture: ComponentFixture<NextMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
