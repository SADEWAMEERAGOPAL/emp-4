import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-matconfima',
  templateUrl: './matconfima.component.html',
  styleUrls: ['./matconfima.component.scss']
})
export class MatconfimaComponent implements OnInit {

  constructor(private _matref: MatDialogRef<MatconfimaComponent>) { }

  ngOnInit(): void {
  }

  OnClose(flag: boolean){
    this._matref.close(flag)
  }
}
