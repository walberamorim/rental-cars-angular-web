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
        label: 'Item Menu 1',
        icon: 'fa fa-search fa-lg',
        command: () => {},
      },
      {
        label: 'Item Menu 2',
        icon: 'fa fa-home fa-lg',
        command: () => {},
      },
      {
        label: 'Item Menu 3',
        icon: 'fa fa-folder-open',
        command: () => {},
      },
      {
        label: 'Item Menu 4',
        icon: ' fa fa-money',
        command: () => {},
      },
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
