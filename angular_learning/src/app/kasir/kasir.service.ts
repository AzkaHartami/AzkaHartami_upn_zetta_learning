export interface Game {title:string, id:string, harga:number}  
export interface selectedGame {title:string, id:string, harga:number, jumlah:number}  
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn :'root'
})

export class kasirService{
    private games : BehaviorSubject<Game[]> = new BehaviorSubject<Game[]> ([
        {
            id:'1',
            title: 'Arcana Phantom Assasin',
            harga:380000
          },
          {
            id:'2',
            title: 'Arcana Shadow Fiend',
            harga:350000
          },
          {
            id:'3',
            title: 'Arcana Monkey King',
            harga:340000
          },
          {
            id:'4',
            title: 'Arcana Terrorblade',
            harga:325000
          },
          {
            id:'5',
            title: 'Arcana Lina',
            harga:300000
          },
          {
            id:'6',
            title: 'Arcana Pudge',
            harga:330000
          },
    ])

    private selectedGames : BehaviorSubject<selectedGame[]> = new BehaviorSubject<selectedGame[]>([]);

    public games$ = this.games.asObservable();
    public selectedGames$ = this.selectedGames.asObservable();

    addGame(game :Game){
        const duplicated =this.selectedGames.value.findIndex(({id})=>id===game.id)
        let jumlah : 0;
        if(duplicated>=0){
            this.selectedGames.value[duplicated].jumlah+=1
        }
        else{
            this.selectedGames.value.push({...game, jumlah: 1})
        }
      }
    
}