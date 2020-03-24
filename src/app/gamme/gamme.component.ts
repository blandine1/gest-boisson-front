import { Component, OnInit } from '@angular/core';
import {ModelGamme} from './gammeModel';
import {ServiceGamme} from './gammeService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gamme',
  templateUrl: './gamme.component.html',
  styleUrls: ['./gamme.component.css']
})
export class GammeComponent implements OnInit {

  gamme:ModelGamme[]=[];
  constructor( private serviceGamme:ServiceGamme, private routes:Router) { }

  ngOnInit() {
    console.log('initialisation.................')
    this.doSearchGamme();
  }

  doSearchGamme(){
    this.serviceGamme.getGammes().subscribe(
      (data:any)=>{
        this.gamme=data;
      },
      error1 => {
        console.log(error1);
      }
    )
  }

  onEditGamme(id:number){
    this.routes.navigate(['edit-gamme',id])
  }

  onDeleteGamme(id:number){
    this.serviceGamme.getDeleteGamme(id).subscribe(
      data=>{
        console.log(data);
        this.doSearchGamme();
      },
      error1 => {
        console.log(error1)
      }
    )
  }

  newGamme(){
    this.routes.navigate(['new-gammes'])
  }

}
