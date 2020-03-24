import { Component, OnInit } from '@angular/core';
import {ServiceFournisseur} from '../fournisseur/fournisseurService';
import {ModelFournisseur} from '../fournisseur/FournisseurModel';

@Component({
  selector: 'app-new-fournisseur',
  templateUrl: './new-fournisseur.component.html',
  styleUrls: ['./new-fournisseur.component.css']
})
export class NewFournisseurComponent implements OnInit {

  fournisseur:ModelFournisseur=new ModelFournisseur();
  constructor( private serviceFournisseur:ServiceFournisseur) { }

  ngOnInit() {
  }

  onSaveFournisseur(fournisseur){
    this.serviceFournisseur.saveFournisseur(this.fournisseur).subscribe(
      data=>{
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )
  }



}
