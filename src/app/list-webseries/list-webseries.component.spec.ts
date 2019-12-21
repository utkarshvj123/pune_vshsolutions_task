import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWebseriesComponent } from './list-webseries.component';

describe('ListWebseriesComponent', () => {
  let component: ListWebseriesComponent;
  let fixture: ComponentFixture<ListWebseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWebseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWebseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
