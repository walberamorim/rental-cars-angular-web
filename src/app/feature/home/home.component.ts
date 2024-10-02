import { NotificationService } from './../../shared/services/notification.service';
import { Component } from '@angular/core';
import { FormGroup  } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogService } from '../../shared/services/confirm-dialog.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule],
  providers: [NotificationService, ConfirmDialogService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  value!: string;

  form!: FormGroup;

  cities: City[] | undefined;

  selectedCity: City | undefined;

  constructor(
    private notificationService: NotificationService,
    private confimDialogService: ConfirmDialogService
  ) {}

  show() {
    this.notificationService.informationMessage(
      'Teste Service',
      'Messagem de teste'
    );
  }

  confirm(event: Event) {
    this.confimDialogService.showConfirmDialog(
      event,
      'Tem certeza que deseja excluir este item?',
      'Confirmar Exclusão',
      'Item excluido com sucesso',
      'Exclusão confirmada',
      'Não houve confirmação da exclusão',
      'Item não foi excluido'
    )
  }
}
