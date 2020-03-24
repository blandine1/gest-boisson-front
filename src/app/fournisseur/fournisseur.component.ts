import { Component, OnInit } from '@angular/core';
import { ServiceFournisseur} from './fournisseurService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  fournisseur;

  i:number=0;

  constructor(private serviceFournisseur:ServiceFournisseur, private routes:Router) { }

  ngOnInit() {
    this.searchFournisseur();
  }

  searchFournisseur(){
      this.serviceFournisseur.getFournisseur().subscribe(
        data=>{
          this.fournisseur=data;
          console.log(data);
        },
        error1 => {
          console.log(error1)
        }
      )
  }

  onEditFournisseur(id:number){
    this.routes.navigate(['edit-fournisseur',id])
  }

  onDelete(id:number){
    this.serviceFournisseur.deleteFournisseur(id).subscribe(
      data=>{
        console.log(data);
        this.searchFournisseur();
      },
      error1 => {
        console.log(error1);
      }
    )
  }

  fournisseurs(){
    this.routes.navigate(['new-fournisseur'])
  }
}
