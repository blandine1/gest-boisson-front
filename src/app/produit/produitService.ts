import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelProduit} from './produitModel';

@Injectable()
export class ServiceProduit {
  constructor(private  http:HttpClient){

  }

  onGetProduit(){
    return this.http.get('http://localhost:8080/produits')
  }

  onSaveProduit(produit:ModelProduit){
    return this.http.post('http://localhost:8080/produits',produit)
  }

  onGetProduitById(id:number){
    return this.http.get('http://localhost:8080/produits/'+id)
  }
  onUpdateProduit(produit:ModelProduit){
    return this.http.put('http://localhost:8080/produits/'+produit.id,produit)
  }

  onDeleteProduit(id:number){
    return this.http.delete('http://localhost:8080/produits/'+id)
  }
}
