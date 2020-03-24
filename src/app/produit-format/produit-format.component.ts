import { Component, OnInit } from '@angular/core';
import {ModelProduitFormat} from './produitFormatModel';
import {ServiceProduitFormat} from './produitFormatService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produit-format',
  templateUrl: './produit-format.component.html',
  styleUrls: ['./produit-format.component.css']
})
export class ProduitFormatComponent implements OnInit {

  produitFormat:ModelProduitFormat[]=[];
  constructor(private serviceProduitFormat:ServiceProduitFormat, private router:Router) { }

  ngOnInit() {
    this.searProduitFormat();
  }

  searProduitFormat(){
    this.serviceProduitFormat.getProduitFormats().subscribe(
      (data:any)=>{
        this.produitFormat=data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )
  }

  onEditPF(id:number){
    this.router.navigate(['edit-produitFormat',id])
  }


  onDelete(id:number){
    this.serviceProduitFormat.getDeleteProduitFormat(id).subscribe(
      data=>{
        console.log(data);
        this.searProduitFormat();
      },
      error1 => {
        console.log(error1);
      }
    )
  }

}
