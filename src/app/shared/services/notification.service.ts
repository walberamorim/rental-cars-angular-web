import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {

  constructor(
    private messageService: MessageService,
  ) { }

  public successMessage(title: string, message: string){
    this.messageService.add({
      key: 'app',
      severity: 'success',
      summary: title,
      detail: message,
    });
  }

  public errorMessage(title: string, message: string){
    this.messageService.add({
      key: 'app',
      severity: 'error',
      summary: title,
      detail: message,
    });
  }

  public warnMessage(title: string, message: string){
    this.messageService.add({
      key: 'app',
      severity: 'warn',
      summary: title,
      detail: message,
    });
  }

  public informationMessage(title: string, message: string){
    this.messageService.add({
      key: 'app',
      severity: 'info',
      summary: title,
      detail: message,
    });
  }
}
