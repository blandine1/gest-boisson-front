import {ModelProduitFormat} from '../produit-format/produitFormatModel';
import {ModelCommande} from '../commande/commandeModel';

export class ModelPFC {
  id:any=null;
  pf:ModelProduitFormat=new ModelProduitFormat();
  comande:ModelCommande=new ModelCommande();
  quantite:number=null;
  prix:number=null;
  description:String="";
}
