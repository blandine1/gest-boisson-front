import { Component, OnInit } from '@angular/core';
import {ServiceProduitFormat} from '../produit-format/produitFormatService';
import {ModelProduitFormat} from '../produit-format/produitFormatModel';
import {ServiceProduit} from '../produit/produitService';
import {ServiceFormat} from '../format1/formatService';
import {ModelProduit} from '../produit/produitModel';
import {ModelFormat} from '../format1/formatModel';

@Component({
  selector: 'app-new-produit-format',
  templateUrl: './new-produit-format.component.html',
  styleUrls: ['./new-produit-format.component.css']
})
export class NewProduitFormatComponent implements OnInit {

  produitFormat:ModelProduitFormat=new ModelProduitFormat();
  produit:ModelProduit=new ModelProduit();
  produits:ModelProduit[]=[];
  formate:ModelFormat=new ModelFormat();
  formats:ModelFormat[]=[];

  constructor(private serviceProduitFormat:ServiceProduitFormat,private serviceProduit:ServiceProduit,
              private serviceFormat:ServiceFormat) { }

  ngOnInit() {
    this.serviceProduit.onGetProduit().subscribe(
      (data:any)=>{
        this.produits=data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    );

    this.serviceFormat.getFormats().subscribe(
      (data:any)=>{
        this.formats=data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )

  }

  onSaveProFormat(){
    this.produitFormat.produit=this.produit;
    this.produitFormat.format=this.formate;
    console.log(this.produit);
    console.log(this.formate);
    console.log(this.produitFormat);
    this.serviceProduitFormat.getOnsaveProduitFormat(this.produitFormat).subscribe(
      data=>{
        console.log(data);
        alert("enregistrement effectué avec succes");
      },
      error1 => {
        console.log(error1);
        alert("echec de l'enregistrement");
      }
    )
  }


}
