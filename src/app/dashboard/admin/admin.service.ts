import { EventEmitter, Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  userAccepted = new EventEmitter<User>();
  userRefused = new EventEmitter<number>();
  userSelectedindex = new EventEmitter<number>();


  name: string;
  lastName : string ;
  email : string ;
  phone: string;
  date : string ;
  role : string ;


   users = [
    {position: 1, name: 'molka', lastName:'louka', email: 'molka@moll', phone: ' 8888888', role : "RH"},
    {position: 2, name: 'ilyes', lastName:'dali', email: 'ilyes@dali', phone: ' 77777777', role : "VP "},
    {position: 3, name: 'molka', lastName:'prr', email: 'molka@aissa', phone: ' 50123102', role : "P "},
    {position: 4, name: 'ahmed', lastName:'aissa', email: 'ahmed@aissa', phone: ' 50123102', role : "membre senior "},
    {position: 5, name: 'ahmed', lastName:'chhata', email: 'ahmed@chhata', phone: ' 99999999', role : "membre senior "},
    {position: 6, name: 'ahmed', lastName:'hamouda', email: 'ahmed@aissa', phone: ' 85858', role : "membre junior "},
    {position: 7, name: 'dali', lastName:'daloula', email: 'ahmed@aissa', phone: ' 58585858', role : "membre junior "},
    {position: 8, name: 'ghazi', lastName:'hamouda', email: 'ahmed@aissa', phone: ' 858585', role : "membre junior "},
    {position: 9, name: 'aziz', lastName:'front', email: 'ahmed@aissa', phone: ' 858585', role : "membre junior "},
  ];

   requests = [
    {position: 1, name: 'molka', lastName:'louka', email: 'molka@moll', phone: ' 8888888', date :"12/12/2022"},
    {position: 2, name: 'ilyes', lastName:'dali', email: 'ilyes@dali', phone: ' 77777777',date :"11/11/2020"},
    {position: 3, name: 'molka', lastName:'prr', email: 'molka@aissa', phone: ' 50123102',date :"10/10/1000"},
    {position: 4, name: 'ahmed', lastName:'aissa', email: 'ahmed@aissa', phone: ' 50123102',date :"9/9/1010"} 
    ];
    requestsSource = this.requests;


  getUsers(){
    return this.users.slice();
  }

  addUser(user : User){
  }

  getRequests(){
    return this.requests.slice();
  }

 refuseReq(index:number){
 
  this.userRefused
  .subscribe(
    (index : number) =>{
      this.requests.splice(index, 1)
      this.requestsSource= this.getRequests() ;
    }
  )
 }

ngOnInit(){
  this.userRefused.subscribe(
    (index:number)=>{
      this.requests.splice(index, 1)
      this.requestsSource= this.getRequests() ;  
      }
  )
    }

}

