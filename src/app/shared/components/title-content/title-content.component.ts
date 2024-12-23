import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-title-content',
  standalone: true,
  imports: [DividerModule,NgStyle],
  templateUrl: './title-content.component.html',
  styleUrl: './title-content.component.scss'
})
export class TitleContentComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
}
