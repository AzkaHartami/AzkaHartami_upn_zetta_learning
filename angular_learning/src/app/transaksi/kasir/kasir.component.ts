import { Component, OnInit } from '@angular/core';
export interface item {id: number, name: string, price: number};
export interface selecteditem {id: number, name: string, price: number,amount: number};

@Component({
  selector: 'app-kasir',
  templateUrl: './kasir.component.html',
  styleUrls: ['./kasir.component.scss']
})
export class KasirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public items: item[] = [
    {id: 1, name: 'Arcana Phantom Assasin', price: 380000},
    {id: 2, name: 'Arcana Shadow Fiend', price: 350000},
    {id: 3, name: 'Arcana Monkey King', price: 340000},
    {id: 4, name: 'Arcana Terrorblade', price: 325000},
    {id: 5, name: 'Arcana Lina', price: 300000},
    {id: 6, name: 'Arcana Pudge', price: 330000},
  ]

  public selectedItems: selecteditem[]=[];

  addItem(item:item){
    const duplicate = this.selectedItems.findIndex(({id}) => id === item.id);
    if(duplicate >= 0){this.selectedItems[duplicate].amount += 1}
    else{this.selectedItems.push({...item, amount: 1})}
  }
}