import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs"
export interface admin {id :string}
export interface admin {id : string , nama : string , posisi : string , kehadiran : string ,action : string}

@Injectable({
    providedIn :'root'

})


export class adminService{
    private Admin : BehaviorSubject<admin[]> =  new BehaviorSubject<admin[]>([
        {
            id : '1' , 
            nama : 'Bambang', 
            posisi :'Super Admin', 
            kehadiran :  'Tersedia' ,
            action : 'detail admin'
        },
        {
            id : '2' , 
            nama : 'Wahyu', 
            posisi :'Admin', 
            kehadiran :  'Tersedia' ,
            action : 'detail admin'
        },
        {
            id : '3' , 
            nama : 'Bagas', 
            posisi :'Admin', 
            kehadiran :  'Tidak Tersedia' ,
            action : 'detail admin'
        },
        {
            id : '4' , 
            nama : 'Suci', 
            posisi :'Admin', 
            kehadiran :  'Tidak Tersedia' ,
            action : 'detail admin'
        },
        {
            id : '5' , 
            nama : 'Egi', 
            posisi :'Admin', 
            kehadiran :  'Tidak Tersedia' ,
            action : 'detail admin'
        },
        {
            id : '6' , 
            nama : 'Sthevi', 
            posisi :'Admin', 
            kehadiran :  'Tidak Tersedia' ,
            action : 'detail admin'
        }
      ]);

constructor(){

      }
      
public admin$ = this.Admin.asObservable();

getadminById(id:string) : any{
    const adminarray = this.Admin.getValue();
    console.log(adminarray)
    const admin = adminarray.find(admin => admin.id ===id)
    return admin || null;
        
      
      }

    
    
  }