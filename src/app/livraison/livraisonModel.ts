import {ModelFournisseur} from '../fournisseur/FournisseurModel';

export class ModelLivraison {
  id:any=null;
  dateLivraison:Date=null;
  description:String="";
  fournisseur:ModelFournisseur=new ModelFournisseur();
}
