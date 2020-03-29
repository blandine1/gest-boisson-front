import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelStandartAchat} from './ModelStandartAchat';
import {Observable} from 'rxjs';

@Injectable()
export class ServiceAchat {

  constructor(private http:HttpClient){

  }

  getSaveAchat(achat:ModelStandartAchat): Observable<any>{
    return  this.http.post("http://localhost:8080/produitFormats",achat)
  }


}
