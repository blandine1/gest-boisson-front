import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelPFC} from './PFCmodel';

@Injectable()
export class ServicePFC {
  constructor(private http: HttpClient) {

  }

//PFC:ProduitFoematCommande

  getPFC() {
   return this.http.get('http://localhost:8080/produitFormatCommandes');
  }

  getSavePFC(pfc: ModelPFC) {
   return this.http.post('http://localhost:8080/produitFormatCommandes', pfc);
  }

  getUpdatePFC(pfc: ModelPFC) {
    return this.http.put('http://localhost:8080/produitFormatCommandes/' + pfc.id, pfc);
  }

  getPFCById(id: number) {
   return this.http.get('http://localhost:8080/produitFormatCommandes/' + id);
  }

  getDeletePFC(id: number) {
   return this.http.delete('http://localhost:8080/produitFormatCommandes/' + id);
  }
}
