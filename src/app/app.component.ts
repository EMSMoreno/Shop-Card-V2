import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  list: any[] = [
    { id: 1, name: 'Feijão', qty: 2, price: 0, basket: false },
    { id: 2, name: 'Arroz', qty: 2, price: 0, basket: false },
    { id: 3, name: 'Frango', qty: 4, price: 0, basket: false },
    { id: 4, name: 'Chouriço', qty: 7, price: 0, basket: false },
    { id: 5, name: 'SuperBock Mini', qty: 12, price: 0, basket: false },
    { id: 6, name: 'Gelado', qty: 1, price: 0, basket: false },
    { id: 7, name: 'Azeite', qty: 1, price: 0, basket: false },
  ]

  constructor() { }

  setItem(item: any, index: number) {
    const _list = [...this.list];
    _list[index] = item;
    this.list = _list;
  }
}
