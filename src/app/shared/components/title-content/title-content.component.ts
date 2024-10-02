import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-content',
  standalone: true,
  imports: [],
  templateUrl: './title-content.component.html',
  styleUrl: './title-content.component.scss'
})
export class TitleContentComponent {
  @Input() title!: string
}
