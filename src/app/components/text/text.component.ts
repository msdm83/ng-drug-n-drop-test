import { Component, Input } from '@angular/core';
import { Text } from '../../app.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {

  @Input()
  public text: Text | null = null;

  @Input()
  public drugguble = false;
}
