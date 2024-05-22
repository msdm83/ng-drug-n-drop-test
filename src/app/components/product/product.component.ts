import { Component, Input } from '@angular/core';
import { Product } from '../../app.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input()
  public product: Product | null = null;
  @Input()
  public drugguble = false;
}

