import { Component, OnInit } from '@angular/core';
import {ServiceFormat} from '../format1/formatService';
import {ActivatedRoute} from '@angular/router';
import {ModelFormat} from '../format1/formatModel';

@Component({
  selector: 'app-edit-format',
  templateUrl: './edit-format.component.html',
  styleUrls: ['./edit-format.component.css']
})
export class EditFormatComponent implements OnInit {

  idFormat;
  format:ModelFormat=new ModelFormat();
  constructor(private serviceFormat:ServiceFormat, private activatedRoute:ActivatedRoute) {
    this.idFormat=this.activatedRoute.snapshot.params['id']
  }

  ngOnInit() {
      this.serviceFormat.getFormat(this.idFormat).subscribe(
        (data:any)=>{
          this.format=data;
          console.log(data);
        },
        error1 => {
          console.log(error1);
        }
      )
  }

  onEditFormat(){
      this.serviceFormat.getUpdateFormat(this.format).subscribe(
        data=>{
          console.log(data);
        },
        error1 => {
          console.log(error1);
        }
      )
  }





}
