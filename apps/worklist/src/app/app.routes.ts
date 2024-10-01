import { Route } from '@angular/router';


export const appRoutes: Route[] = [
  {
    path: 'ui-components',
    loadComponent: () =>
      import('@angular-monorepo/ui-components').then((m) => m.UiComponentsComponent),
  }
];