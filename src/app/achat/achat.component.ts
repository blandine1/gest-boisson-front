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
import {ModelStandartAchat} from './ModelStandartAchat';

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

//ModelStandartAchat represente des donnees qui ne chagent pas lors de l'enregistrement d'une livraison
  achat:ModelStandartAchat=new ModelStandartAchat();
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
    this.listeLIgnrPFTableau.push(this.listeLignePF);
    this.listeLignePF= new ModelProduitFormatAchat();
    this.prixTotal();
  }

  prixTotal(){
    this.achat.prixTotal=0;
    for (let i=0;i<this.listeLIgnrPFTableau.length; i++){
      this.achat.prixTotal=this.listeLIgnrPFTableau[i].prix_unitaireA+this.achat.prixTotal;
    }
  }



  saveAchat(){
   // this.achat.listeLIgnrPFTableau.listeLigneLPF=this.listeLignePF.listeLigneLPF;
    this.achat.listeLIgnrPFTableau=this.listeLIgnrPFTableau;
    //console.log(this.achat.listeLIgnrPFTableau);
    console.log(this.achat);
    this.achat=new ModelStandartAchat();
  }

}
