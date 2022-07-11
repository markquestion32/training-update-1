import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AdminService } from '../../admin.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {
  private userObservable : Subscription ;



  editUser!: FormGroup;
  users:User[] ;
  i:number;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogComponent>,
    private adminService : AdminService 
    ) { }


  ngOnInit(): void {
    this.users = this.adminService.getUsers();
    this.editUser = this.formBuilder.group({
      name: [''],
      lastname: [''],
      email: [''],
      phone: [''],
      role: ['']
  });

  this.userObservable=this.adminService.userSelectedindex
          .subscribe(       
            (index:number)=>{
              this.i=index ;
              console.log(this.i)
            }

          );
          


}


  update() {
    console.log("hello "  + this.editUser.value)
    this.editUser.reset();
    this.dialogRef.close('save');
  }

}



    //  this.userObservable=this.adminService.userSelectedindex
    //        .subscribe(       
    //          (index:number)=>{
              
    //           console.log(this.users[index].name)
    //           this.editUser = this.formBuilder.group({
    //             name: [this.users[index].name],
    //             lastname: [this.users[index].lastName],
    //             email: ['whyy'],
    //             phone: ['whyy'],
    //             role: ['whyy yyyyyyyyyyyyyy']
    //         });
        
    //               // this.editUser.controls['name'].setValue("zzzzz");
    //               // this.editUser.controls['lastname'].setValue("zzzzzzzzzzzz");
    //               // this.editUser.controls['email'].setValue(user.email);
    //               // this.editUser.controls['phone'].setValue(user.phone);
    //               // this.editUser.controls['role'].setValue(user.role);                 
        
  //       )
  //       console.log(this.userS+"outise the ememe")

        // this.editUser = this.formBuilder.group({
        //   name: [this.users[index].name],
        //   lastname: [this.users[index].lastName],
        //   email: ['whyy'],
        //   phone: ['whyy'],
        //   role: ['whyy yyyyyyyyyyyyyy']
 
      
  //   //   this.editUser = this.formBuilder.group({
  //   //     name: [this.userS.name],
  //   //     lastname: ['lastname'],
  //   //     email: ['email'],
  //   //     phone: ['phone'],
  //   //     role: ['rocccle'],
