import {Component, OnInit} from '@angular/core';
import {ServiceProduit} from '../produit/produitService';
import {ActivatedRoute} from '@angular/router';
import {ModelProduit} from '../produit/produitModel';
import {ServiceGamme} from '../gamme/gammeService';
import {ModelGamme} from '../gamme/gammeModel';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

  idProduit;
  produit: ModelProduit = new ModelProduit();
  gamme: ModelGamme = new ModelGamme();
  gammes: ModelGamme[] = [];

  constructor(private serviceProduit: ServiceProduit, private gammeService: ServiceGamme, private activatedRoute: ActivatedRoute) {
    this.idProduit = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.gammeService.getGammes().subscribe(
      (data:any)=>{
        this.gammes=data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )

    this.serviceProduit.onGetProduitById(this.idProduit).subscribe(
      (data:any)=>{
        this.produit=data
      },
      error1 => {
        console.log(error1)
      }
    )
  }

  onSaveProduit() {
    this.produit.gamme=this.gamme;
     this.serviceProduit.onUpdateProduit(this.produit).subscribe(
       data=>{
         console.log(data);
         alert("modification effectuee avec succes")
       },
       error1 => {
         console.log(error1);
         alert('echec de la modification')
       }
     )
  }

}
