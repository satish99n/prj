import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileMaskingComponent } from './file-masking.component';

describe('FileMaskingComponent', () => {
  let component: FileMaskingComponent;
  let fixture: ComponentFixture<FileMaskingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileMaskingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileMaskingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
