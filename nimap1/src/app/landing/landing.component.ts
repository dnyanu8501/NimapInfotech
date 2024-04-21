import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    console.log("dnkjddhfjk");
    
  
    this.dialog.open(RegisterComponent, {
      
    });
  }
  open(){
    console.log('hello');
    
  }
  


}
