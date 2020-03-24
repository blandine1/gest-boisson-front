import { Component, OnInit } from '@angular/core';
import {ModelFournisseur} from '../fournisseur/FournisseurModel';
import {ServiceFournisseur} from '../fournisseur/fournisseurService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-fournisseur',
  templateUrl: './edit-fournisseur.component.html',
  styleUrls: ['./edit-fournisseur.component.css']
})
export class EditFournisseurComponent implements OnInit {

  idFournisseur;
  fournisseur:ModelFournisseur=new ModelFournisseur();
  constructor(private serviceFournisseur:ServiceFournisseur,private activateRoute:ActivatedRoute) {
    this.idFournisseur=this.activateRoute.snapshot.params['id']
  }

  ngOnInit() {

    this.serviceFournisseur.getFournisseurs(this.idFournisseur).subscribe(
      (data:any)=>{
        this.fournisseur=data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )
  }


  updateFournisseur(){
    this.serviceFournisseur.editFournisseur(this.fournisseur).subscribe(
      data=>{
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )
  }

}
