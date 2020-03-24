import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelGamme} from './gammeModel';

@Injectable()
export class ServiceGamme {
  constructor(private http:HttpClient){

  }

  getGammes(){
    return this.http.get('http://localhost:8080/gammes')
  }

  getGammeId(id:number){
   return this.http.get('http://localhost:8080/gammes/'+id)
  }

  getDeleteGamme(id:number){
   return this.http.delete('http://localhost:8080/gammes/'+id)
  }

  getUpdateGamme(gamme:ModelGamme){
    return this.http.put('http://localhost:8080/gammes/'+gamme.id,gamme)
  }

  getSaveGamme(gamme:ModelGamme){
    return this.http.post('http://localhost:8080/gammes',gamme)
  }
}
