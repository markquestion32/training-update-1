
import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addtrainer',
  templateUrl: './addtrainer.component.html',
  styleUrls: ['./addtrainer.component.sass']
})
export class AddtrainerComponent implements OnInit {

  TrainerForm!: FormGroup;
  actionBtn : string = "save"
  constructor(private formBuilder: FormBuilder,
     private api: ApiService,
     @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef: MatDialogRef<AddtrainerComponent>) { }

  ngOnInit(): void {
    this.TrainerForm = this.formBuilder.group({
      TrainerName: ['', Validators.required],
      TrainerTrainer: ['', Validators.required],
      TrainerField: ['', Validators.required],
      Trainerdate: ['', Validators.required]
    });
    if(this.editData){
      this.actionBtn = "update"
      this.TrainerForm.controls["TrainerName"].setValue(this.editData.TrainerName);
      this.TrainerForm.controls["TrainerTrainer"].setValue(this.editData.TrainerTrainer);
      this.TrainerForm.controls["TrainerField"].setValue(this.editData.TrainerField);
      this.TrainerForm.controls["Trainerdate"].setValue(this.editData.Trainerdate);
    }
  }
  addTrainer() {
    console.log("hello "  + this.TrainerForm.value)
    if (! this.editData){
    if (this.TrainerForm.valid) {
      this.api.postTrainer(this.TrainerForm.value)
        .subscribe({
          next: (res) => {
            this.TrainerForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert("error while adding the Trainer")

          }
        })
    }
  }else{
      this.updateTrainer()
    }
}
updateTrainer(){
  this.api.putTrainer(this.TrainerForm.value,this.editData.id)
  .subscribe({
    next:(res)=>{
      this.TrainerForm.reset();
      this.dialogRef.close('update');
    },
    error:()=>{alert("error while updating")}
  })
  
}
}

