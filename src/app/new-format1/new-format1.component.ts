import { Component, OnInit } from '@angular/core';
import {ModelFormat} from '../format1/formatModel';
import {ServiceFormat} from '../format1/formatService';

@Component({
  selector: 'app-new-format1',
  templateUrl: './new-format1.component.html',
  styleUrls: ['./new-format1.component.css']
})
export class NewFormat1Component implements OnInit {

  format:ModelFormat=new ModelFormat();
  constructor(private serviceFormat:ServiceFormat) { }

  ngOnInit() {
  }

  saveFormat(){
    this.serviceFormat.getSaveFormat(this.format).subscribe(
      data=>{
        console.log(data)
      },
      error1 => {
        console.log(error1);
      }
    )
  }
}
