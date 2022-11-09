import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { kasirService, selectedGame } from '../kasir.service';
import { Game } from '../kasir/kasir.component';

@Component({
  selector: 'app-bayar',
  templateUrl: './bayar.component.html',
  styleUrls: ['./bayar.component.scss']
})
export class BayarComponent implements OnInit, AfterContentChecked {

  public games : Observable<selectedGame[]>
  public total : Observable<number>

  constructor(private KasirService: kasirService) {
    console.log('bayar constructor loaded')

    this.games = this.KasirService.selectedGames$
    this.total = this.KasirService.selectedGames$.pipe(
      map((games) => games.reduce((total, game) => total += game.jumlah * game.harga , 0)))
   }

  ngOnInit(): void {
    console.log('bayar ngOnInit loaded')
  }

  ngAfterContentChecked(): void {
    this.total = this.KasirService.selectedGames$.pipe(
      map((games) => games.reduce((total, game) => total += game.jumlah * game.harga , 0)))
   }


}