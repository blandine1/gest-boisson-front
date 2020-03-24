import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelLPF} from './LPFModel';

@Injectable()
export class ServiceLPF {
  constructor(private http:HttpClient){

  }

  getLPFs(){
    return this.http.get('http://localhost:8080/livraisonProduitFormats')
  }

  getLPFById(id:number){
    return this.http.get('http://localhost:8080/livraisonProduitFormats/'+id)
  }

  getSaveLPF(livrProdFormat:ModelLPF){
    return this.http.post('http://localhost:8080/livraisonProduitFormats/',livrProdFormat)
  }

  getUpdateLPF(livrProdFormat:ModelLPF){
    return this.http.put('http://localhost:8080/livraisonProduitFormats/'+livrProdFormat.id,livrProdFormat)
  }

  getDeleteLPF(id:number){
    return this.http.delete('http://localhost:8080/livraisonProduitFormats/'+id)
  }
}
