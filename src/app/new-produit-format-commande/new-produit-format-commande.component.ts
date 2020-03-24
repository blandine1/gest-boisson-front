import { Component, OnInit } from '@angular/core';
import {ModelCommande} from '../commande/commandeModel';
import {ModelProduitFormat} from '../produit-format/produitFormatModel';
import {ModelPFC} from '../produit-format-commande/PFCmodel';
import {ServicePFC} from '../produit-format-commande/PFCservice';
import {ServiceCommande} from '../commande/commandeService';
import {ServiceProduitFormat} from '../produit-format/produitFormatService';

@Component({
  selector: 'app-new-produit-format-commande',
  templateUrl: './new-produit-format-commande.component.html',
  styleUrls: ['./new-produit-format-commande.component.css']
})
export class NewProduitFormatCommandeComponent implements OnInit {

  comande:ModelCommande=new ModelCommande();
  comandes:ModelCommande[]=[];
  pf:ModelProduitFormat=new ModelProduitFormat();
  pfs:ModelProduitFormat[]=[];
  pfc:ModelPFC=new ModelPFC();
  constructor(  private servicePFC:ServicePFC,
                private serviceCommande:ServiceCommande,
                private serviceProduitFormat:ServiceProduitFormat) { }

  ngOnInit() {
    this.serviceProduitFormat.getProduitFormats().subscribe(
      (data:any)=>{
        this.pfs=data;
        console.log(data)
      },
      error1 => {
        console.log(error1)
      }
    );

    this.serviceCommande.getCommandes().subscribe(
      (data:any)=>{
        this.comandes=data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )
  }

  onSavePFC(){

  }

}
