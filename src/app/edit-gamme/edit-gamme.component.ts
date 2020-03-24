import { Component, OnInit } from '@angular/core';
import {ServiceGamme} from '../gamme/gammeService';
import {ActivatedRoute} from '@angular/router';
import {ModelGamme} from '../gamme/gammeModel';

@Component({
  selector: 'app-edit-gamme',
  templateUrl: './edit-gamme.component.html',
  styleUrls: ['./edit-gamme.component.css']
})
export class EditGammeComponent implements OnInit {

  gamme:ModelGamme=new ModelGamme();
  idGamme;
  constructor(private serviceGamme:ServiceGamme,private activatedRoute:ActivatedRoute) {
    this.idGamme=this.activatedRoute.snapshot.params['id']
  }

  ngOnInit() {
    this.serviceGamme.getGammeId(this.idGamme).subscribe(
      (data:any)=>{
        this.gamme=data;
        console.log(data)
      },
      error1 => {
        console.log(error1)
      }
    )
  }

  onEditGamme(){
    this.serviceGamme.getUpdateGamme(this.gamme).subscribe(
      data=>{
        console.log(data);
        alert("modification effectuee avec succes");
      },
      error1 => {
        console.log(error1)
      }
    )
  }

}
