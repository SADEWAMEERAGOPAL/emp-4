import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  
    constructor(private _spinner:SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      this._spinner.setSpinnerobs(true)
    const modifyreq=request.clone({
       setHeaders: {
         "Auth" : "json token take form Ls"
       }
    })
    
    return next.handle(modifyreq).pipe(
      finalize(()=>{
        this._spinner.setSpinnerobs(false)
      })
    )
  }
}
