import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { kasirService } from '../kasir.service';
export interface Game {title:string, id:string, harga:number}  
export interface selectedGame {title:string, id:string, harga:number, jumlah:number}  

@Component({
  selector: 'app-kasir',
  templateUrl: './kasir.component.html',
  styleUrls: ['./kasir.component.scss']
})

export class KasirComponent implements OnInit {
  @Output ('gameAdded') onAddGame : EventEmitter<Game> = new EventEmitter<Game>()

  judul: string = 'List Item';

  public games: Observable<Game[]>
    

  public selectedGames : selectedGame[]=[]

  
  constructor(private KasirService: kasirService) {
    this.games = this.KasirService.games$
    console.log('kasir constructor loaded')
   }

  ngOnInit(): void { 
    console.log('kasir ngOnInit loaded')
  }

  addGame(game :Game) : void{
    this.KasirService.addGame(game);
   
    
  }

  

}