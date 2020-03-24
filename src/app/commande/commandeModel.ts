import {ModelClient} from '../client/clientModel';

export class ModelCommande {
  id:any=null;
  date:Date=null;
  prixTotal:number=null;
  description:String="";
  client:ModelClient=new ModelClient();
}

