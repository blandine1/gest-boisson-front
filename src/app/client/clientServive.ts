import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelClient} from './clientModel';

@Injectable()
export class ServiceClient{
  constructor(private http:HttpClient ){

  }

  getClient(){
    return this.http.get("http://localhost:8080/clients")
  }

  getSaveClient(client:ModelClient){
    return this.http.post("http://localhost:8080/clients",client)
  }

  getClients(id:number){
    return this.http.get("http://localhost:8080/clients/"+id)
  }

  getDeleteClient(id:number){
    return this.http.delete("http://localhost:8080/clients/"+id)
  }

  getUpdateClient(client:ModelClient){
    return this.http.put('http://localhost:8080/clints/'+client.id,client)
  }
}
