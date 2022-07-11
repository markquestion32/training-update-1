import { Component, OnInit  , OnDestroy, Output, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AdminService } from '../admin.service';
import { User } from '../models/user';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {


  name: string;
  lastName : string ;
  email : string ;
  phone: number;
  role : string;

usersColumns  = ['position', 'name', 'lastName', 'email','phone','role','edit'];
usersSource : User[];

constructor(
  private adminService : AdminService,
  private dialog: MatDialog,
  ) 
  {}
ngOnInit(): void { 
 this.adminService.userAccepted
    .subscribe(
      (user:any)=>{
        console.log("now will push user "+user)
        this.adminService.users.push(user)      
      }
    )
    this.usersSource = this.adminService.getUsers();  
  }

  edit(index:number){
    this.dialog.open(DialogComponent, {
      width: "40%",
    })
    // var users=this.usersSource;
    // var user = users[index]; 
    // var userSelecteddata =   {
    //     position: user.position,
    //     name: user.name ,
    //     lastName:user.lastName,
    //     email: user.email,
    //     phone: user.phone, 
    //     role :user.role
    //   };      
    //   //console.log(userSelecteddata)
    //   this.adminService.userSelected.emit(userSelecteddata);
        this.adminService.userSelectedindex.emit(index);

  }




}
