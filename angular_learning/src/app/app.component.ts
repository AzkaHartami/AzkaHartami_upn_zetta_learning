import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular_learning';
  isChild = false;

  InputNama(value: any){
    console.log(value)
  }
  constructor() {
    console.log('app constructor loaded')
   }

  ngOnInit(): void { 
    console.log('app ngOnInit loaded')
  }
  tampil(): void{
    this.isChild = !this.isChild
  }
}