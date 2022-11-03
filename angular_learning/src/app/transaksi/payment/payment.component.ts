import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, AfterContentChecked} from '@angular/core';
import { selecteditem } from '../kasir/kasir.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, AfterContentChecked {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() items!: selecteditem[];
  @Output () itemChanges : EventEmitter<selecteditem[]> = new EventEmitter <selecteditem[]>;

  public total :number = 0;

  ngAfterContentChecked(): void {
    console.log("tes")
    this.total = this.items.reduce((total, item) => total += item.amount * item.price , 0)
  }

  removeItem(itemToBeRemoved:selecteditem){
    const itemIndex = this.items.findIndex(({id}) => id ===itemToBeRemoved.id)
    const itemRef = this.items[itemIndex]
    if(this.items[itemIndex].amount>1){
      this.items[itemIndex].amount-=1
    }
    else{
      this.items.splice(itemIndex,1);
    }
  }
}