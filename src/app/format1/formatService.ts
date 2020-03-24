import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModelFormat} from './formatModel';

@Injectable()
export class ServiceFormat {
  constructor(private http:HttpClient){

  }

  getFormats(){
    return this.http.get('http://localhost:8080/formats')
  }

  getFormat(id:number){
    return this.http.get('http://localhost:8080/formats/'+id)
  }

  getSaveFormat(format:ModelFormat){
    return this.http.post('http://localhost:8080/formats',format)
  }

  getUpdateFormat(format:ModelFormat){
    return this.http.put('http://localhost:8080/formats/'+format.id,format)
  }

  getDeleteFormat(id:number){
    return this.http.delete('http://localhost:8080/formats/'+id)
  }

}
