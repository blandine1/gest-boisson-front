import {ModelClient} from '../client/clientModel';

export class ModelFacture {
  id:number;
  client:ModelClient= new ModelClient();
  prixTotal:number=0;
  date:Date=null;
}
