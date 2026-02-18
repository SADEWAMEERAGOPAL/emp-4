import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

 private  spinnerSub$: BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)
spinnerObs$: Observable<boolean>=this.spinnerSub$.asObservable()

setSpinnerobs(flag: boolean){
 return this.spinnerSub$.next(flag)
}
  constructor() { }
}
