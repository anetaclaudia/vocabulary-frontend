import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordResultTableComponent } from './word-result-table.component';

describe('WordResultTableComponent', () => {
  let component: WordResultTableComponent;
  let fixture: ComponentFixture<WordResultTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordResultTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
