import { Component, EventEmitter, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { RequestModel } from '../models/request';
import { User } from '../models/user';

@Component({
  selector: 'app-accounts-manager',
  templateUrl: './accounts-manager.component.html',
  styleUrls: ['./accounts-manager.component.sass']
})
export class AccountsManagerComponent implements OnInit {

  requestsColumns  = ['position', 'name', 'lastName', 'email','phone','date','Decision'];
 
  requestsSource : RequestModel[];


constructor(private adminService : AdminService) {
}
ngOnInit(): void { 
 
  this.requestsSource = this.adminService.getRequests();

}
acceptRequest(index:number){
  var requests=this.requestsSource;
  var AcceptedRequest = requests.splice(index, 1); 
  var reqaccepteddata =   {
        position: AcceptedRequest[0].position,
        name: AcceptedRequest[0].name ,
        lastName:AcceptedRequest[0].lastName,
        email: AcceptedRequest[0].email,
        phone: AcceptedRequest[0].phone, 
        role :'membre junior '
      };      
  this.adminService.userAccepted.emit(reqaccepteddata);
  this.refuseRequest(index);
}


refuseRequest(index:number){

  // it must be a method to update Source req from the serve
  // bcoz req source must be private 
 this.adminService.requests.splice(index, 1)
 this.requestsSource=this.adminService.getRequests();
}





}
