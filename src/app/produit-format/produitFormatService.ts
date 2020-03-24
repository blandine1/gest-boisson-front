import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelProduitFormat} from './produitFormatModel';

@Injectable()
export class ServiceProduitFormat {
  constructor(private http:HttpClient){

  }


  getProduitFormats(){
    return this.http.get('http://localhost:8080/produitFormats')
  }

  getProduitFormatById(id:number){
    return this.http.get('http://localhost:8080/produitFormats/'+id)
  }

  getOnsaveProduitFormat(produitFormat:ModelProduitFormat){
    return this.http.post('http://localhost:8080/produitFormats',produitFormat)
  }

  getUpdatteProduitFormat(produitFormat:ModelProduitFormat){
    return this.http.put('http://localhost:8080/produitFormats/'+produitFormat.id,produitFormat)
  }

  getDeleteProduitFormat(id:number){
    return this.http.delete('http://localhost:8080/produitFormats/'+id)
  }

  getProduitIdFormatId(produitId:number,formatId:number){
    return this.http.get('http://localhost:8080/produitFormats/'+produitId+'/'+formatId)
  }

}
