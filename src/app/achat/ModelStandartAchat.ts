
import {ModelFournisseur} from '../fournisseur/FournisseurModel';
import {ModelProduitFormatAchat} from './AchatModel';

export class ModelStandartAchat {
  id:number;
  fournisseur:ModelFournisseur= new ModelFournisseur();
  prixTotal:number=0;
  date:Date=null;
  listeLIgnrPFTableau:any=null;

}
