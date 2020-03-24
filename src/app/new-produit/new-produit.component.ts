import { Component, OnInit } from '@angular/core';
import {ModelProduit} from '../produit/produitModel';
import {ServiceProduit} from '../produit/produitService';
import {ModelGamme} from '../gamme/gammeModel';
import {ServiceGamme} from '../gamme/gammeService';

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.css']
})
export class NewProduitComponent implements OnInit {

  produit:ModelProduit=new ModelProduit();
  gammes:ModelGamme[]=[];
  gamme:ModelGamme=new ModelGamme();
  constructor( private serviceProduit:ServiceProduit,private serviceGamme:ServiceGamme) { }

  ngOnInit() {

     this.serviceGamme.getGammes().subscribe(
       (data:any)=>{
         this.gammes=data;
         console.log(data);
       },
       error1 => {
         console.log(error1);
       }
     )
  }

  saveProduit(){
    this.produit.gamme=this.gamme;
    this.serviceProduit.onSaveProduit(this.produit).subscribe(
      data=>{
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )
  }
}
