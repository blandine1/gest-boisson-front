import { Component, OnInit } from '@angular/core';
import {ModelLivraison} from '../livraison/livraisonModel';
import {ServiceLivraison} from '../livraison/livraisonService';
import {ServiceClient} from '../client/clientServive';
import {ModelClient} from '../client/clientModel';
import {ModelFournisseur} from '../fournisseur/FournisseurModel';
import {ServiceFournisseur} from '../fournisseur/fournisseurService';

@Component({
  selector: 'app-new-livraison',
  templateUrl: './new-livraison.component.html',
  styleUrls: ['./new-livraison.component.css']
})
export class NewLivraisonComponent implements OnInit {

  fournisseurs:ModelFournisseur[]=[];
  fournisseur:ModelFournisseur=new ModelFournisseur();

  livraison:ModelLivraison=new ModelLivraison();
  constructor(private serviceLivraison:ServiceLivraison,private serviceFournisseur:ServiceFournisseur) { }

  ngOnInit() {
    this.serviceFournisseur.getFournisseur().subscribe(
      (data:any)=>{
        this.fournisseurs=data;
        console.log(data)
      },
      error1 => {
        console.log(error1);
      }
    )
  }

  onSaveLivraison(){
    this.livraison.fournisseur=this.fournisseur;
    console.log(this.livraison);
    this.serviceLivraison.getSaveLivraison(this.livraison).subscribe(
      data=>{
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )
  }

}
