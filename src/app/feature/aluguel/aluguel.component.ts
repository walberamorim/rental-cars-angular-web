import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { NgStyle } from '@angular/common';
import { FileUploadComponent } from './componentes/file-upload/file-upload.component';
import { ButtonModule } from 'primeng/button';
import { TitleContentComponent } from '../../shared/components/title-content/title-content.component';

@Component({
  selector: 'app-aluguel',
  templateUrl: './aluguel.component.html',
  imports: [FileUploadComponent,ButtonModule, TitleContentComponent  ],
  styleUrls: ['./aluguel.component.css'],
  standalone: true
})
export class AluguelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
