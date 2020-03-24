import {ModelLivraison} from '../livraison/livraisonModel';
import {ModelProduitFormat} from '../produit-format/produitFormatModel';

//ModelLPF veut dire model Livraison Produit Format
export class ModelLPF {
  id:number=null;
  quantite:number=null;
  description:String="";
  livraison:ModelLivraison=new ModelLivraison();
  pf:ModelProduitFormat=new ModelProduitFormat();
}
