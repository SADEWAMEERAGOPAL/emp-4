import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmpService } from './emp.service';
import { IEmployee } from 'src/app/shared/model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  EmployeeArr!: IEmployee[]


  snackbar(msg: string, icon='Close', {
  }){
    this._snackbar.open(msg, icon, {
      horizontalPosition:"center",
      verticalPosition: 'top',
      duration: 3000
    })
  }




constructor(
    private _snackbar: MatSnackBar,
    private _empser: EmpService
){}





 

  ngOnInit(): void {

      this.fetchAllPost()

      this._empser.CreateEmpObj$.subscribe(data=>{
        this.EmployeeArr.push(data)
         this.snackbar(' new emp added successfully', 'Close', {})
      })


        this._empser.deleteEmpObj$.subscribe(res=>{
          let indexno=this.EmployeeArr.findIndex(e=>e.id===res)
          this.EmployeeArr.splice(indexno,1)
          this.snackbar('emp deleted successfully', 'Close', {})
        })
      

      this._empser.updateEmpObj$.subscribe(data=>{
        let index=this.EmployeeArr.findIndex(res=>res.id===data.id)
          this.EmployeeArr[index]=data
         this.snackbar('emp updated successfully', 'Close', {})
      })
  }

//   EmployeeArr:Array<IEmployee>=[
//    {
//   Fname: "Jhon",
//   Lname: "Doe",
//   Email: "jd12@gmail.com",
//   Contact: 1236789006,
//   Role: "Front End Devloper",
//   id: "1",
//   Address: "pune"
// },
//  {
//   Fname: "June",
//   Lname: "Doe",
//   Email: "juned1223@gmail.com",
//   Contact: 1236789006,
//   Role: "Back End Devloper",
//   id: "2",
//    Address: "pune"
// },

//  {
//   Fname: "May",
//   Lname: "Doe",
//   Email: "Mayd1223@gmail.com",
//   Contact: 1236789006,
//   Role: " Software Engineer",
//   id: "3",
//    Address: "pune"
// }
//   ]

  fetchAllPost(){
    this._empser.fetchAlllEmp()
    .subscribe(data=>{
      this.EmployeeArr=data
    })
  }




  

   


  

   
}

  


