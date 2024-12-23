import { LayoutComponent } from './core/layout/layout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {
                path: '',
                redirectTo: '/relatorios',
                pathMatch: 'full'
              },
              {
                path: 'relatorios',
                loadComponent: () => import('./feature/relatorio/relatorio.component')
                  .then(component => component.RelatorioComponent)
              },
              {
                path: "aluguel",
                loadComponent: () => import('./feature/aluguel/aluguel.component')
                  .then(component => component.AluguelComponent)
              }
        ]
    }
];
