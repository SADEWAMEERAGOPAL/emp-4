import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.scss']
})
export class EmpFormComponent implements OnInit {
  empForm!: FormGroup
  isinEditMode: boolean=false
  editId!: string



  constructor(private _empser: EmpService){}

  ngOnInit(): void {
     this.createForm()

     this._empser.EditEmpObj$.subscribe(res=>{
      this.isinEditMode=true
      this.empForm.patchValue(res)
      this.editId=res.id
        console.log(res.id)
     })

    
  }


  createForm(){
    
  this.empForm = new FormGroup({
    Fname: new FormControl(),
    Lname:new FormControl(),
    Email: new FormControl(),
    Address: new FormControl(),
    Contact: new FormControl(),
    Role:new FormControl(),
  });
}


get f(){
  return this.empForm.controls
}

OnAddEmp(){
  if(this. empForm.valid){
      let empObj=this. empForm.value
      
      this._empser.createEmp(empObj)
      .subscribe(data=>{
        console.log(data)
        this._empser.creatobj({...empObj, id:data.name})
        this. empForm.reset()
      })
      

    }
}

OnUpdateEmp(){
   if(this. empForm.valid){
      let empObj={...this.empForm.value, id: this.editId}
      console.log(empObj)
      this._empser.Updateurl(empObj)
      .subscribe(data=>{
        this._empser.UpdateObj(data)
        this. empForm.reset()
        this.isinEditMode=false
        this.empForm.reset()
      })
      

    }
}
  }
