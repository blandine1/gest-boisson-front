import { Component, OnInit } from '@angular/core';
import {ServiceProduit} from '../produit/produitService';
import {ServiceFormat} from '../format1/formatService';
import {ModelFormat} from '../format1/formatModel';
import {ModelProduit} from '../produit/produitModel';
import {ServiceFournisseur} from '../fournisseur/fournisseurService';
import {ModelFournisseur} from '../fournisseur/FournisseurModel';
import {LigneModelLPF} from './LPFModel';
import {ModelProduitFormatAchat} from './AchatModel';
import {ServiceProduitFormat} from '../produit-format/produitFormatService';
import {ServiceLPF} from '../livraison-prod-format/LPFService';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {

  message:String="enregistrement effectue avec succes"

  formats:ModelFormat[]=[];
  format:ModelFormat=new ModelFormat();

  produits:ModelProduit[]=[];
  produit:ModelProduit=new ModelProduit();

  fournisseurs:ModelFournisseur[]=[];
  fournisseur:ModelFournisseur=new ModelFournisseur();


  listeLigneLPF: LigneModelLPF=new LigneModelLPF();
  listeLignePF: ModelProduitFormatAchat= new ModelProduitFormatAchat();
  listeLIgnrPFTableau: ModelProduitFormatAchat[]=[];


  constructor(private serviceProduit:ServiceProduit,
              private serviceFormat:ServiceFormat,
              private serviceFournisseur:ServiceFournisseur,
              private serviceLPF:ServiceLPF,
              private servicePF:ServiceProduitFormat) { }

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
    );

    this.serviceFournisseur.getFournisseur().subscribe(
      (data:any)=>{
        this.fournisseurs=data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )
  }

  ajouter(){
    this.listeLignePF.formatA=this.format;
    this.listeLignePF.produitA=this.produit;
    console.log(this.listeLignePF);
    this.listeLIgnrPFTableau.push(this.listeLignePF);
    this.listeLignePF= new ModelProduitFormatAchat();
  }



  /*saveAchat(){
    this.listeLignePF.produitA=this.produit;
    this.listeLignePF.formatA=this.format;
    this.listeLignePF.listeLigneLPF=this.listeLigneLPF;
    this.servicePF.getOnsaveProduitFormat(this.listeLignePF).subscribe(
      (data:any)=>{
        console.log(data);
        this.message;
      },
      error1 => {
        console.log(error1);
      }
    )
  }*/

}
