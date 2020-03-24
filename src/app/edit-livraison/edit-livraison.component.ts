import { Component, OnInit } from '@angular/core';
import {ServiceFournisseur} from '../fournisseur/fournisseurService';
import {ModelFournisseur} from '../fournisseur/FournisseurModel';
import {ModelLivraison} from '../livraison/livraisonModel';
import {ServiceLivraison} from '../livraison/livraisonService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-livraison',
  templateUrl: './edit-livraison.component.html',
  styleUrls: ['./edit-livraison.component.css']
})
export class EditLivraisonComponent implements OnInit {
  fournissuers:ModelFournisseur[]=[];
  fournissuer:ModelFournisseur=new ModelFournisseur();

  livraison:ModelLivraison=new ModelLivraison();
  idLivraison;
  constructor(private serviceFournisseur:ServiceFournisseur,
              private serviceLivraison:ServiceLivraison,
              private activatedRoute:ActivatedRoute) {
    this.idLivraison=this.activatedRoute.snapshot.params['id']
  }

  ngOnInit() {

    this.serviceLivraison.getLivraisonById(this.idLivraison).subscribe(
      (data:any)=>{
        this.livraison=data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )

    this.serviceFournisseur.getFournisseur().subscribe(
      (data:any)=>{
        this.fournissuers=data;
      },
      error1 => {
        console.log(error1);
      }
    )
  }


  onSaveLivraison(){

  }
}
