import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonView } from './json-view';

describe('JsonView', () => {
  let component: JsonView;
  let fixture: ComponentFixture<JsonView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
