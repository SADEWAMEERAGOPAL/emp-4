import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatconfimaComponent } from '../matconfima/matconfima.component';
import { EmpService } from '../emp.service';
import { IEmployee } from 'src/app/shared/model/employee';

@Component({
  selector: 'app-emp-card',
  templateUrl: './emp-card.component.html',
  styleUrls: ['./emp-card.component.scss']
})
export class EmpCardComponent implements OnInit {
@Input() EmployeeArr! :IEmployee[]
 
TrachById(index: number, emp:IEmployee){
  return emp.id
}
  constructor(private _matdia: MatDialog,
    private _empser: EmpService
  ) { }

  ngOnInit(): void {
  }

onEdit(emp: IEmployee){
 this._empser.editobj(emp)
}


OnRemove(id: string){
let matconfi=new MatDialogConfig()
    matconfi.data="Are you Sure",
    matconfi.disableClose=true;
    matconfi.width="200",
    this._matdia.open(MatconfimaComponent, matconfi)
    .afterClosed().subscribe(res=>{
      if(res){
         this._empser.deletEmp(id)
     .subscribe((data: any)=>{
      this._empser.deleteEmp(id)
     })
      }
    })
}
}
