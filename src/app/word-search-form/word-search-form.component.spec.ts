import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSearchFormComponent } from './word-search-form.component';

describe('WordSearchFormComponent', () => {
  let component: WordSearchFormComponent;
  let fixture: ComponentFixture<WordSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
