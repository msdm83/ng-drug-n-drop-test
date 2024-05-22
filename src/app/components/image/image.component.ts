import { Component, Input } from '@angular/core';
import { Image } from '../../app.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  @Input()
  public image: Image | null = null;
  @Input()
  public drugguble = false;
}
