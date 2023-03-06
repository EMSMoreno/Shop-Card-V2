import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: any
  @Output() result = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }

  updatePrice(price: string | number) {
    this.item.price = +price;
    this.result.emit(this.item);
  }

  updateBasket() {
    if (this.item.price) {
      this.item.basket = !this.item.basket;
      this.result.emit(this.item);
    }
  }

}
