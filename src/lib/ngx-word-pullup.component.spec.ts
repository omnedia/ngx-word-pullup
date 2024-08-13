import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWordPullupComponent } from './ngx-word-pullup.component';

describe('NgxWordPullupComponent', () => {
  let component: NgxWordPullupComponent;
  let fixture: ComponentFixture<NgxWordPullupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxWordPullupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxWordPullupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
