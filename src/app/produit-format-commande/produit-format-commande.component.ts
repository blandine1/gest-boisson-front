import { Component, OnInit } from '@angular/core';
import {ServicePFC} from './PFCservice';
import {ModelPFC} from './PFCmodel';

@Component({
  selector: 'app-produit-format-commande',
  templateUrl: './produit-format-commande.component.html',
  styleUrls: ['./produit-format-commande.component.css']
})
export class ProduitFormatCommandeComponent implements OnInit {


  pfc:ModelPFC[]=[];
  constructor(private servicePFC:ServicePFC) { }

  ngOnInit() {
      this.servicePFC.getPFC().subscribe(
        (data:any)=>{
          this.pfc=data;
          console.log(data);
        },
        error1 => {
          console.log(error1)
        }
      )
  }

  onSavePFC(){

  }

}
