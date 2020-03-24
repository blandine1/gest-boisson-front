import { Component, OnInit } from '@angular/core';
import {ServiceLPF} from './LPFService';
import {ModelPFC} from '../produit-format-commande/PFCmodel';
import {ModelLPF} from './LPFModel';

@Component({
  selector: 'app-livraison-prod-format',
  templateUrl: './livraison-prod-format.component.html',
  styleUrls: ['./livraison-prod-format.component.css']
})
export class LivraisonProdFormatComponent implements OnInit {

  constructor(private serviceLPF:ServiceLPF) { }

  livraisProdFormat:ModelLPF[]=[];
  ngOnInit() {
    this.serviceLPF.getLPFs().subscribe(
      (data:any)=>{
        this.livraisProdFormat=data;
      },
      error1 => {
        console.log(error1);
      }
    )

  }

}
