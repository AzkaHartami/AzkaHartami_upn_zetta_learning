import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { adminService } from '../admin.service';
interface Admin {id : string  , nama : string , posisi : string , kehadiran : string ,action : string }

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  
  private adminid : string|null =null
  public admin : Admin|null = null

  constructor(private route:ActivatedRoute , private adminservice: adminService) {
    this.adminid = this.route.snapshot.paramMap.get('id')
    console.log(this.adminid);
   }
 

  ngOnInit(): void {
    if(typeof this.adminid === 'string'){
      this.admin = this.adminservice.getadminById(this.adminid)
    }
    console.log(this.admin);
    
  }

  

}