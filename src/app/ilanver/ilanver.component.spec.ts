import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlanverComponent } from './ilanver.component';

describe('IlanverComponent', () => {
  let component: IlanverComponent;
  let fixture: ComponentFixture<IlanverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlanverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IlanverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
