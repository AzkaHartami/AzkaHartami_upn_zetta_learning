import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
export interface List {id : string ,name : string ,email: string, age : number , gender : string , position :string, marital : string , addresgrup : addres[]} 
export interface addres {addres :string , zip : string ,  city : string , country : string}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  private listid : string|null =null
  public list : List|null = null

  constructor(private route: ActivatedRoute , private service : UserService) { 
    this.listid = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if(typeof this.listid === 'string'){
      this.list = this.service.getListById(this.listid)
      console.log(this.listid)
    }
  }
}