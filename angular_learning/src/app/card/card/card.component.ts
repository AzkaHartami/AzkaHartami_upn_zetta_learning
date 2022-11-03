import { Component, OnInit, EventEmitter, Output } from '@angular/core';
export interface Game {title:string, id:string, text:string, date:string}  
export interface selectedGame {title:string, id:string, text:string, date:string, jumlah:number}  

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Output ('gameAdded') onAddGame : EventEmitter<Game> = new EventEmitter<Game>()

  judul: string = 'Dota 2 Arcana';

  public games: Game[] = [
    {
      id:'1',
      title: 'Drow Ranger',
      text:'Through the eyes of the mad mask, Traxex glimpsed forgotten memories of her youth. But in addition to her own repressed terrors, the mask revealed much more--horrors glimpsed by different eyes in other times. Memories of brutality stretching into ages uncountable, mystically imprinting a murderous landscape across every corner of her mind. Now, even as she casts the mask aside, she must fight to overcome the most self-destructive impulses unleashed by the evils . ',
      date:'2021-12-14'
    },
    {
      id:'2',
      title: 'Spectre',
      text:'The many aspects of Mercurial are fragments of a single form no longer—for one has stolen away from the many, and the realities of a new Spectre rise. Enticed and trapped by a cursed set of armor, a solitary shade of Mercurial finds that with each soul she harvests for the blighted plate, a stronger sense of self arrives along with it. While at first such forced separation enraged her, she now seeks this tantalizing freedom... Killing whomever she needs to earn more. ',
      date:'2021-06-24'
    },
    {
      id:'3',
      title: 'Wraith King',
      text:'In an age lost even to his own memory, Ostarion fed his lust for eternal life not with spectral essence, but a nigh-unending harvest of bone. The walls of his palace were formed of fired bone; the streets paved with bones of every sort of creature and every enemy. And those of the flesh who entered this domain took great care, for the King was first and foremost a collector, and nothing moved in the Empire of Bone without summoning the gaze of his unblinking eyes. ',
      date:'2020-05-25'
    },
    {
      id:'4',
      title: 'Phantom Assasin',
      text:'With a raspy cackle, the elder smith Craler swung the sword that his family had spent eleven generations to fold and forge. So sharp it was that, with a sound like tearing fabric, a rip in reality tore open.  ',
      date:'2014-11-20'
    },
    {
      id:'5',
      title: 'Shadow Fiend',
      text:'Shadow Fiend has long collected the souls of his enemies. As is the case with any collector, some prizes have stood above others, to be sought out at any cost. However, there are certain souls that should. ',
      date:'2014-09-25'
    },
    {
      id:'6',
      title: 'Monkey King',
      text:'Though his misdeeds have long been forgiven, the thrills of Sun Wukongs crimes live on. Relive three legendary trials from his earliest adventures with the Great Sages Reckoning. ',
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