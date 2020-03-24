import { Component, OnInit } from '@angular/core';
import {ModelGamme} from '../gamme/gammeModel';
import {ServiceGamme} from '../gamme/gammeService';

@Component({
  selector: 'app-new-gamme',
  templateUrl: './new-gamme.component.html',
  styleUrls: ['./new-gamme.component.css']
})
export class NewGammeComponent implements OnInit {

  gamme:ModelGamme=new ModelGamme();
  constructor(private serviceGamme:ServiceGamme) { }

  ngOnInit() {
  }

  onSaveGamme(){
    this.serviceGamme.getSaveGamme(this.gamme).subscribe(
      (data:any)=>{
        console.log(data)
      },
      error1 => {
        console.log(error1)
      }
    )
  }

}
