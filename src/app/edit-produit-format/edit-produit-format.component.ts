import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServiceProduitFormat} from '../produit-format/produitFormatService';
import {ModelProduitFormat} from '../produit-format/produitFormatModel';
import {ModelProduit} from '../produit/produitModel';
import {ModelFormat} from '../format1/formatModel';
import {ServiceProduit} from '../produit/produitService';
import {ServiceFormat} from '../format1/formatService';

@Component({
  selector: 'app-edit-produit-format',
  templateUrl: './edit-produit-format.component.html',
  styleUrls: ['./edit-produit-format.component.css']
})
export class EditProduitFormatComponent implements OnInit {

  produitFormat:ModelProduitFormat=new ModelProduitFormat();
  produit:ModelProduit=new ModelProduit();
  produits:ModelProduit[]=[];
  formate:ModelFormat=new ModelFormat();
  formats:ModelFormat[]=[];



  proFormat:ModelProduitFormat=new ModelProduitFormat();
  idPF;
  constructor( private activatedRoute:ActivatedRoute,
               private servicePF:ServiceProduitFormat,
               private serviceProduit:ServiceProduit,
               private serviceFormat:ServiceFormat ) {
    this.idPF=this.activatedRoute.snapshot.params['id']
  }

  ngOnInit() {
    this.servicePF.getProduitFormatById(this.idPF).subscribe(
      (data:any)=>{
        console.log(data);
        this.proFormat=data;
      },
      error1 => {
        console.log(error1);
      }
    );

    this.serviceProduit.onGetProduit().subscribe(
      (data:any)=>{
        this.produits=data;
        //console.log(data);
      },
      error1 => {
        //console.log(error1);
      }
    );

    this.serviceFormat.getFormats().subscribe(
      (data:any)=>{
        this.formats=data;
       // console.log(data);
      },
      error1 => {
        //console.log(error1);
      }
    )



  }

  UpdatePF(){
    this.servicePF.getUpdatteProduitFormat(this.proFormat).subscribe(
      data=>{
        console.log(data);
      },
      error1 => {
        console.log(error1)
      }
    )
  }

}
