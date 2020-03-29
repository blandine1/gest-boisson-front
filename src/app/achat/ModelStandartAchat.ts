
import {ModelFournisseur} from '../fournisseur/FournisseurModel';

export class ModelStandartAchat {
  fournisseur:ModelFournisseur= new ModelFournisseur();
  prixTotal:number=0;
  date:Date=null;
  listeLIgnrPFTableau:any=null;

}
