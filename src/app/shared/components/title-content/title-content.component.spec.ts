import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleContentComponent } from './title-content.component';

describe('TitleContentComponent', () => {
  let component: TitleContentComponent;
  let fixture: ComponentFixture<TitleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
