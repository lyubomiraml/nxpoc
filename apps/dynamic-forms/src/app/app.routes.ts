import { Route } from '@angular/router';


export const appRoutes: Route[] = [
  {
    path: 'ui-components',
    loadComponent: () =>
      import('@angular-monorepo/ui-components').then((m) => m.UiComponentsComponent),
  },
  {
    path: 'json-forms-renderers',
    loadComponent: () =>
      import('@angular-monorepo/json-forms-renderers').then((m) => m.JsonFormsRenderersComponent),
  },
];