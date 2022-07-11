import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postSession(data : any){
    return this.http.post<any>("http://localhost:3000/sessionlist/",data)
  }
  getSession(){
    return this.http.get<any>("http://localhost:3000/sessionlist/")
  }
  putSession(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/sessionlist/"+id,data)
  }
  deleteSession(id:number){
    return this.http.delete<any>("http://localhost:3000/sessionlist/"+id)
  }
  postTrainer(data : any){
    return this.http.post<any>("http://localhost:3000/Trainerlist/",data)
  }
  getTrainer(){
    return this.http.get<any>("http://localhost:3000/Trainerlist/")
  }
  putTrainer(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/Trainerlist/"+id,data)
  }
  deleteTrainer(id:number){
    return this.http.delete<any>("http://localhost:3000/Trainerlist/"+id)
  }
}

