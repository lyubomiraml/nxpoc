import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiComponentsComponent} from '@angular-monorepo/ui-components'
 
@Component({
  selector: 'lib-json-forms-renderers',
  standalone: true,
  imports: [CommonModule, UiComponentsComponent],
  templateUrl: './json-forms-renderers.component.html',
  styleUrl: './json-forms-renderers.component.css',
})
export class JsonFormsRenderersComponent {}
