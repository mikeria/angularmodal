import { Component, OnInit } from '@angular/core';
import{ MatDialog, MatDialogRef } from '@angular/material';
import{ NpowerDialogComponent } from '../npower-dialog/npower-dialog.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  public titleText: String;
  mainText: String;
  buttonText: String;
  myDialogRef: MatDialogRef<NpowerDialogComponent>;

  constructor(private dialog:MatDialog) { }

  openMyDialog(){
    this.myDialogRef = this.dialog.open(NpowerDialogComponent);
    console.log("openMyDialog called!");
    
  }

  ngOnInit() {
    this.titleText = 'Article Header';
    this.mainText = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.';
    this.buttonText = 'More..';
  }

}
