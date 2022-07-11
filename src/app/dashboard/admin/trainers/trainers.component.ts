import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddtrainerComponent } from './addtrainer/addtrainer.component';
import { Dialog } from '@angular/cdk/dialog';
import { ApiService } from 'src/app/service/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.sass']
})
export class TrainersComponent implements OnInit {
  name: string;
  trainer: string;
  field: string;
  date: string;

  // sessions = [

  //   { name: 1, trainer: 'molka', field: 'ent', date: "12/12/2022" },
  //   { name: 2, trainer: 'ilyes', field: 'comp', date: "11/11/2022" },


  // ];

  displayedColumns: string[] = ['TrainerName', 'TrainerTrainer', 'TrainerField', 'Trainerdate','Action'];
  //sessionsSource = this.sessions
    ;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) {

  }
  ngOnInit(): void {
    this.getAllTrainer();
  }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  openDialog() {
    this.dialog.open(AddtrainerComponent, {
      width: "30%"
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllTrainer();
      }
    })
  }
  getAllTrainer() {
    this.api.getTrainer()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        error: (err) => {
          alert("error while fetching")
        }
      })

  }
  editTrainer(row : any){
    this.dialog.open(AddtrainerComponent,{
      width:'30%' ,
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllTrainer();
    } })
  }
  deleteTrainer(id:number){
    this.api.deleteTrainer(id)
    .subscribe({
      next:(res)=>{
        this.getAllTrainer();
      },
      error:()=>{
        alert("error while deleting")
      }
    })

  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
