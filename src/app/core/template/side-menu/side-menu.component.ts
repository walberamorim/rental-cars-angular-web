import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { TOOGLE_SIDEBAR } from '../../layout/layout.animation';
import { FormFieldComponent } from '../../../shared/components/form-field/form-field.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    SidebarModule,
    MenuModule,
    FormFieldComponent,
    ButtonModule,
    PanelMenuModule,
    CommonModule,
    InputTextModule,
  ],
  animations: [TOOGLE_SIDEBAR],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  displaySideBar = true;
  @Input() items!: MenuItem[];
  @Input() isOpenLabels: string = 'open';

  isOpenMenu = true;

  @Output() toogle = new EventEmitter();

  exibirMenu() {
    this.isOpenMenu = !this.isOpenMenu;
    this.toogle.emit(this.isOpenMenu);
  }
}
