import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleIntroComponent } from './article-intro.component';

describe('ArticleIntroComponent', () => {
  let component: ArticleIntroComponent;
  let fixture: ComponentFixture<ArticleIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
