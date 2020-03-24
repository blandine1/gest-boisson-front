import {ModelGamme} from '../gamme/gammeModel';

export class ModelProduit {
  id:any=null;
  nom:String="";
  description:String="";
  gamme:ModelGamme=new ModelGamme();
}
