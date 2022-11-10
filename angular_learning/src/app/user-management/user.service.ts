import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export interface User {id : string ,name : string ,email: string, age : number , gender : string , position :string, marital : string , addresgrup : addres[]} 
export interface addres {addres :string , zip : string ,  city : string , country : string}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users : BehaviorSubject<User[]> = new BehaviorSubject <User[]>([])
  public users$ : Observable<User[]>

  constructor() {
    this.users$ = this._users.asObservable()
  }

  GetUserById(id : string): User | undefined {
    return this._users.value.find(user => user.id ===id)
  }

  addUser(payload : User):void{
    const UserIdx = this._users.value.findIndex(user => user.id ===payload.id)
    if(UserIdx >= 0){
        this._users.value.splice(UserIdx,1,payload)
    }
    else{
        this._users.value.push(payload)
    }
    console.log(this._users);
  }

  getListById(id:string) : any{
    const listarray = this._users.getValue();
    console.log(listarray)
    const list = listarray.find(list => list.id ===id)
    return list || null;
  }
}