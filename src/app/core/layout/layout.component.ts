import { RouterOutlet } from '@angular/router';
import { TOOGLE_SIDEBAR } from './layout.animation';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../template/header/header.component';
import { SideMenuComponent } from '../template/side-menu/side-menu.component';
import { FooterComponent } from '../template/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    RouterOutlet,
    ToastModule,
    ConfirmDialogModule,
    BreadcrumbModule,
  ],
  providers: [MessageService, ConfirmationService],
  animations: [TOOGLE_SIDEBAR],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  items!: MenuItem[];

  breadcumbs: MenuItem[] = [{ label: 'Pagina Inicial' }];

  breadcumbsHome!: MenuItem;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Aluguéis',
        icon: 'fa fa-car fa-lg',
        routerLink: '/aluguel',
        command: () => {
          this.breadcumbs = [{ label: 'ALUGUÉIS' }];
        },
      },
      {
        label: 'Relatórios',
        icon: 'fa fa-file fa-lg', 
        routerLink: '/relatorios',
        command: () => {
          this.breadcumbs = [{ label: 'RELATÓRIOS' }];
        },
      }
    ];
  }

  isOpenMenu: boolean = true;

  exibirMenu(value: boolean) {
    this.isOpenMenu = value;
  }

  hasOpen(): string {
    return this.isOpenMenu ? 'open' : 'closed';
  }
}
