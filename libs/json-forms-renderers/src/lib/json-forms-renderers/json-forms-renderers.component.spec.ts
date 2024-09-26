import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonFormsRenderersComponent } from './json-forms-renderers.component';

describe('JsonFormsRenderersComponent', () => {
  let component: JsonFormsRenderersComponent;
  let fixture: ComponentFixture<JsonFormsRenderersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonFormsRenderersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonFormsRenderersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
