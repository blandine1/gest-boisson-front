import { Component, OnInit } from '@angular/core';
import {ServiceProduitFormat} from '../produit-format/produitFormatService';
import {ServiceLivraison} from '../livraison/livraisonService';
import {ModelLivraison} from '../livraison/livraisonModel';
import {ModelProduitFormat} from '../produit-format/produitFormatModel';
import {ModelLPF} from '../livraison-prod-format/LPFModel';
import {ServiceLPF} from '../livraison-prod-format/LPFService';

@Component({
  selector: 'app-new-livraison-prod-format',
  templateUrl: './new-livraison-prod-format.component.html',
  styleUrls: ['./new-livraison-prod-format.component.css']
})
export class NewLivraisonProdFormatComponent implements OnInit {

  livraison:ModelLivraison=new ModelLivraison();
  livraisons:ModelLivraison[]=[];
  pf:ModelProduitFormat=new ModelProduitFormat();
  pfs:ModelProduitFormat[]=[];

  lpf:ModelLPF=new ModelLPF();

  constructor(private servicePF:ServiceProduitFormat, private serviceLivraison:ServiceLivraison,private serviceLPF:ServiceLPF) { }

  ngOnInit() {
    this.serviceLivraison.getLivraisons().subscribe(
      (data:any)=>{
        this.livraisons=data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )

    this.servicePF.getProduitFormats().subscribe(
      (data:any)=>{
        this.pfs=data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )
  }

  onSaveLPF(){
    this.lpf.livraison=this.livraison;
    this.lpf.pf=this.pf;
    this.serviceLPF.getSaveLPF(this.lpf).subscribe(
      (data:any)=>{
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )
  }
}
