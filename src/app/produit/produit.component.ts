import { Component, OnInit } from '@angular/core';
import {ModelProduit} from './produitModel';
import {ServiceProduit} from './produitService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  i:number=0;
  produit:ModelProduit[]=[];
  constructor(private serviceProduit:ServiceProduit, private router:Router) { }

  ngOnInit() {
    this.onSearchProduit();
  }

  onSearchProduit(){

    this.serviceProduit.onGetProduit().subscribe(
      (data:any)=>{
        this.produit=data;
      },
      error1 => {
        console.log(error1);
      }
    )
  }

  onEditProduit(id:number){
    this.router.navigate(['edit-produit',id])
  }

  onDeletePoduit(id:number){
    this.serviceProduit.onDeleteProduit(id).subscribe(
      data=>{
        console.log(data)
        this.onSearchProduit();
      },
      error1 => {
        console.log(error1);
      }
    )

  }

  newProduit(){
    this.router.navigate(['new-produit']);
  }

}
