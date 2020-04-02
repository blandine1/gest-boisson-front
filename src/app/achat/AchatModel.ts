import {LigneModelLPF} from './LPFModel';
import {ModelProduit} from '../produit/produitModel';
import {ModelFormat} from '../format1/formatModel';


export class ModelProduitFormatAchat {
  produitA:ModelProduit=new ModelProduit();
  formatA:ModelFormat=new ModelFormat();
  prix_unitaireA:any= null;
  quantite:any;
}
