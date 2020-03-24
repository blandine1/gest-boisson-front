import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelFournisseur} from './FournisseurModel';


@Injectable()
export class ServiceFournisseur {
  constructor(private http: HttpClient) {

  }

  getFournisseur() {
    return this.http.get('http://localhost:8080/fournisseurs');
  }

  saveFournisseur(fournisseur:ModelFournisseur){
    return this.http.post('http://localhost:8080/fournisseurs',fournisseur)
  }

  getFournisseurs(id:number){
    return this.http.get("http://localhost:8080/fournisseurs/"+id)

  }

  editFournisseur(fournisseurs:ModelFournisseur){
    return this.http.put('http://localhost:8080/fournisseurs/'+fournisseurs.id,fournisseurs)
  }

  deleteFournisseur(id:number){
    return this.http.delete('http://localhost:8080/fournisseurs/'+id)
  }
}
