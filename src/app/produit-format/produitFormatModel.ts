import {ModelProduit} from '../produit/produitModel';
import {ModelFormat} from '../format1/formatModel';

export class ModelProduitFormat {
    id:any=null;
    prix:any="";
    description:String=null;
    produit:ModelProduit=new ModelProduit();
    format:ModelFormat=new ModelFormat();
}
