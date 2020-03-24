import {Injectable} from '@angular/core';
import {ServiceProduitFormat} from '../produit-format/produitFormatService';
import {ServiceLPF} from '../livraison-prod-format/LPFService';

@Injectable()
export class ServiceAchat {






  constructor(private produitFormat:ServiceProduitFormat,
              private lpf:ServiceLPF ){

  }





}
