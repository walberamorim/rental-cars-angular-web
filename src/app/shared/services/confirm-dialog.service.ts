import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  constructor(
    private confirmationService: ConfirmationService,
    private notificationService: NotificationService
  ) {}

  public showConfirmDialog(
    event: any,
    message: string,
    title: string,
    messageOnConfirm: string,
    titleConfirmedMessage: string,
    titleRejectedMessage: string,
    messageOnReject: string
  ) {
    this.confirmationService.confirm({
      key: 'app',
      target: event.target as EventTarget,
      message: message,
      header: title,
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.notificationService.informationMessage(
          titleConfirmedMessage,
          messageOnConfirm
        );
      },
      reject: () => {
        this.notificationService.errorMessage(
          titleRejectedMessage,
          messageOnReject
        );
      },
    });
  }
}
