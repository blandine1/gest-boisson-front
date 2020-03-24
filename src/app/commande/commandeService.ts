import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelCommande} from './commandeModel';

@Injectable()
export  class ServiceCommande {
  constructor(private http:HttpClient){

  }

  getCommandes(){
    return this.http.get('http://localhost:8080/commandes')
  }

  getOnSaveCommande(commande:ModelCommande){
    return this.http.post('http://localhost:8080/commandes/',commande)
  }

  getUpdateCommande(commande:ModelCommande){
    return this.http.put('http://localhost:8080/commandes/'+commande.id,commande)
  }

  getDeleteCommande(id:number){
    return this.http.delete('http://localhost:8080/commandes/'+id)
  }

  getCommandeById(id:number){
    return this.http.get('http://localhost:8080/commandes/'+id)
  }
}

