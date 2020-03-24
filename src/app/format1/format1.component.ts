import { Component, OnInit } from '@angular/core';
import {ServiceFormat} from './formatService';
import {ModelFormat} from './formatModel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-format1',
  templateUrl: './format1.component.html',
  styleUrls: ['./format1.component.css']
})
export class Format1Component implements OnInit {

  format:ModelFormat[]=[];
  constructor( private serviceFormat:ServiceFormat, private router:Router) { }

  ngOnInit() {
   this.doSearch();
  }

  doSearch(){
    this.serviceFormat.getFormats().subscribe(
      (data:any)=>{
        this.format=data;
        console.log(data);
      },
      error1 => {
        console.log(error1)
      }
    )
  }

  onEditFormat(id:number){
    this.router.navigate(['edit-format',id])
  }

  onDeleteFormat(id:number){
    this.serviceFormat.getDeleteFormat(id).subscribe(
      data=>{
        console.log(data);
        this.doSearch();
      },
      error1 => {
        console.log(error1)
      }
    )
  }

  newFormat(){
    this.router.navigate(['new-format'])
  }
}
