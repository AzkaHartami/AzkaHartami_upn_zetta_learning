import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { admin, adminService } from '../admin.service';


export interface admins {id : number , nama : string , posisi : string , kehadiran : string ,action : string }


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public admins : Observable<admin[]> 
  constructor( private adminservice: adminService) { 
    this.admins = this.adminservice.admin$
    console.log(this.admins)
    
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = [ 'id','nama', 'posisi', 'kehadiran' ,'action'];

}