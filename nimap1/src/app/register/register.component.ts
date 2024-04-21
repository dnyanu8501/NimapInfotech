import { Component, ElementRef, OnInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
age:any
addressData:any;
tags:any=[]

addChipName:any
registerFormData!:FormGroup
  constructor(public dialog:MatDialog,private fb:FormBuilder, private apicallService:ApicallService,public elementRef:ElementRef) { }

  
  ngOnInit(): void {
   
    this.postApiData()
    
  }
  postApiData(){
  this.registerFormData=this.fb.group({
    img:[],
    fName:[],
    lName:[],
    email:[],
    contact:[],
    age:[],
    state:[],
    country:[],
    address:[]
    
  })

    
  }

  submit(){
this.apicallService.postApiCAll(this.registerFormData.value).subscribe(res=>{
  console.log(res);
  
})
  }

  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.imageUrl = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }
  add(){
    let value1=document.getElementById('inputChip1')
    // let data=this.elementRef.nativeElement.getElementById(inputChip1)
  // console.log(data);
  
    
    // this.tags.push(this.addChipName)
    // console.log(this.tags);
    

  }
  address(data:any){
console.log(data);
    this.addressData=data

  }

  exit(){
    this.dialog.closeAll()
  }

  formatLabel(value: number): string {
    // console.log("value"+value);
  this.age=value
    return `${value}`;
 
    
  }

  




// inputChip.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter' && inputChip.value.trim() !== '') {
//     const chipText = inputChip.value.trim();

//     const chip = document.createElement('div');
//     chip.className = 'chip';
//     chip.innerHTML = `${chipText}<span class="chip-close">×</span>`;
//     chipsContainer.appendChild(chip);

//     inputChip.value = '';
//   }
// });

// chipsContainer.addEventListener('click', (event) => {
//   const target = event.target as HTMLElement;
//   if (target.classList.contains('chip-close')) {
//     target.parentElement.remove();
//   }
// });


  
  

}
