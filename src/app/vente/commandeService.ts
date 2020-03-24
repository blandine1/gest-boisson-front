import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Commande} from './commandeModel';

@Injectable()
export class ServiceCommende {
  constructor(private http:HttpClient){

  }



  onSaveCommande(c:Commande){
    return this.http.post("http://localhost:8080/commandes",c)
  }

  onGetCommande(){
    return this.http.get("http://localhost:8080/commandes")
  }

}

