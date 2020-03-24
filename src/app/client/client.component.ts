import { Component, OnInit } from '@angular/core';
import {ModelClient} from './clientModel';
import {ServiceClient} from './clientServive';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client:ModelClient[]=[];
  constructor(private serviceClient:ServiceClient, private router:Router) { }

  ngOnInit() {
   this.doSearch();
  }

  doSearch(){
    this.serviceClient.getClient().subscribe(
      (data:any)=>{
        this.client=data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )
  }

  onUpdate(id:number){
    this.router.navigate(['edit-client',id])
  }

  onDelete(id:number){
    this.serviceClient.getDeleteClient(id).subscribe(
      data=>{
        console.log(data);
        this.doSearch();
      },error1 => {
        console.log(error1);
      }
    )

  }

  newClient(){
    this.router.navigate(['new-client'])
  }

}
