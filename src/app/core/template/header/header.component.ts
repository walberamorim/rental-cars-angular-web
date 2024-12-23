import { Component, Input, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TabMenuModule,
    AvatarModule,
    ButtonModule,
    BreadcrumbModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() items!: MenuItem[];

  username!: string | undefined;

  initialsName!: string;

  constructor() {}

  ngOnInit(): void {
    this.getUserPrincipal();
  }

  async getUserPrincipal() {
    this.username = "Walber de Almeida Amorim";
    this.initialsName = "W";
    // if (await this.keyCloakService.isLoggedIn()) {
    //   const userPrincipal = this.keyCloakService.loadUserProfile();
    //   this.username =
    //     (await userPrincipal).firstName + ' ' + (await userPrincipal).lastName;
    //   this.getInitials(this.username);
    // }
  }

  // Função para extrair iniciais
  getInitials(fullName: string) {
    let initials = '';
    if (fullName) {
      const namesArray = fullName.split(' ');
      if (namesArray.length > 0) {
        initials += namesArray[0].charAt(0);
      }
      if (namesArray.length > 1) {
        initials += namesArray[namesArray.length - 1].charAt(0);
      }
    }
    this.initialsName = initials.toUpperCase();
  }
}
