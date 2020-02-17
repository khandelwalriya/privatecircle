import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElementDetailComponent } from './list-element-detail.component';

describe('ListElementDetailComponent', () => {
  let component: ListElementDetailComponent;
  let fixture: ComponentFixture<ListElementDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListElementDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListElementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
