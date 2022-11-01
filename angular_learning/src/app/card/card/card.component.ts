import { Component, OnInit, EventEmitter, Output } from '@angular/core';
export interface Game {title:string, id:string, date:string}  
export interface selectedGame {title:string, id:string, date:string, jumlah:number}  

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Output ('gameAdded') onAddGame : EventEmitter<Game> = new EventEmitter<Game>()

  judul: string = 'List Arcana Dota 2 Terbaik';

  public games: Game[] = [
    {
      id:'1',
      title: 'Drow Ranger',
      date:'2021-12-14'
    },
    {
      id:'2',
      title: 'Spectre',
      date:'2021-06-24'
    },
    {
      id:'3',
      title: 'Wraith King',
      date:'2020-05-25'
    },
    {
      id:'4',
      title: 'Phantom Assasin',
      date:'2014-11-20'
    },
    {
      id:'5',
      title: 'Shadow Fiend',
      date:'2014-09-25'
    },
    {
      id:'6',
      title: 'Monkey King',
      date:'2016-12-12'
    },
  ];

  public selectedGames : selectedGame[]=[]

  addGame(game :Game){
    this.onAddGame.emit(game)
    const duplicated =this.selectedGames.findIndex(({id})=>id===game.id)

    if(duplicated>=0){
      this.selectedGames[duplicated].jumlah +=1
    }
    else{
      this.selectedGames.push({...game, jumlah: 1})
    }
  }
  constructor() { }

  ngOnInit(): void { }

}