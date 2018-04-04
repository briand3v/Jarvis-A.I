import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatJarvisComponent } from './chat-jarvis.component';

describe('ChatJarvisComponent', () => {
  let component: ChatJarvisComponent;
  let fixture: ComponentFixture<ChatJarvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatJarvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatJarvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
