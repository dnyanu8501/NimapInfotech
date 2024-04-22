import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
data:any=[]
  constructor( public apicallService:ApicallService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getData()
    

    
  }
  
  getData(){
    this.apicallService.getApiCall().subscribe(res=>{
      this.data=res
      console.log(res);
     
      
    })

  }
  openDialog(data:any){
   
   
    
  this.apicallService.editId=data
    this.dialog.open(RegisterComponent, {
      
    });
  }
  open(){
    console.log('hello');
    
  }
  

}
