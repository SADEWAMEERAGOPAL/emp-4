import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { IEmployee } from 'src/app/shared/model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  

  BaseUrl: string=environment.Baseurl;
  EmpUrl: string=`${this.BaseUrl}/Emps.json`

  constructor(private _http: HttpClient) { }


  //subject

  private CreateEmp$: Subject<IEmployee>=new Subject<IEmployee>();
  CreateEmpObj$: Observable<IEmployee>=this.CreateEmp$.asObservable()

private deleteEmp$: Subject<string>=new Subject<string>();
  deleteEmpObj$: Observable<string>=this.deleteEmp$.asObservable()


  private updateEmp$: Subject<IEmployee>=new Subject<IEmployee>();
 updateEmpObj$: Observable<IEmployee>=this.updateEmp$.asObservable()


  private EditEmp$: Subject<IEmployee>=new Subject<IEmployee>();
EditEmpObj$: Observable<IEmployee>=this.EditEmp$.asObservable()


//observer

creatobj(Emp: IEmployee){
  this.CreateEmp$.next(Emp)
}

editobj(Emp: IEmployee){
  this.EditEmp$.next(Emp)
}

UpdateObj(Emp: IEmployee){
  this.updateEmp$.next(Emp)
}

deleteEmp(id: string){
  this.deleteEmp$.next(id)
}


//======================observer-done=====================//

fetchAlllEmp(): Observable<IEmployee[]>{
  return this._http.get(this.EmpUrl)
  .pipe(
    map((obj:any)=>{
      let Emparr: IEmployee[]=[]
      for (const key in obj) {
          Emparr.push({...obj[key], id: key})
      }
        return Emparr
    })
  )
}

  createEmp(Emp: IEmployee): Observable<any>{
    return this._http.post<any>(this.EmpUrl, Emp);
  }

  deletEmp(id: string): Observable<any>{
    let removeUrl: string=`${this.BaseUrl}/Emps/${id}.json`
    return this._http.delete(removeUrl)
  }

  Updateurl(UpEmp: IEmployee): Observable<IEmployee>{
    let Up_Url: string= `${this.BaseUrl}/Emps/${UpEmp.id}.json`
    return this._http.patch<IEmployee>(Up_Url, UpEmp)
  }
}


