import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emp-4';

   IsLoading: boolean=false

constructor(private _spinner:SpinnerService){

}

  ngOnInit(): void {
    this._spinner.spinnerObs$.subscribe((flag: boolean)=>{
       this.IsLoading=flag
    })
    
  }
}
