import {HttpClient} from '@angular/common/http';
import {ModelLivraison} from './livraisonModel';
import {Injectable} from '@angular/core';

@Injectable()
export class ServiceLivraison {
  constructor(private http:HttpClient){

  }

  getLivraisons(){
   return this.http.get('http://localhost:8080/livraisons')
  }

  getSaveLivraison(livraison:ModelLivraison){
    return this.http.post('http://localhost:8080/livraisons',livraison)
  }

  getUpdateLIvraison(livraison:ModelLivraison){
   return this.http.put('http://localhost:8080/livraisons/'+livraison.id,livraison)
  }

  getDeleteLivraison(id:number){
    return  this.http.delete('http://localhost:8080/livraisons/'+id)
  }

  getLivraisonById(id:number){
   return this.http.get('http://localhost:8080/livraisons/'+id)
  }
}
