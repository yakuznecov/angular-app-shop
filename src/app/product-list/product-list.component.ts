import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('Товар был опубликован!');
  }

  onNotify() {
    window.alert('Вы получите уведомление, когда товар поступит в продажу')
  }
}
