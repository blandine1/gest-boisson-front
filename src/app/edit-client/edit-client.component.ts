import { Component, OnInit } from '@angular/core';
import {ServiceClient} from '../client/clientServive';
import {ActivatedRoute} from '@angular/router';
import {ModelClient} from '../client/clientModel';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  client:ModelClient=new ModelClient();
  idClient;
  constructor(private serviceClient:ServiceClient, private activatedRoute:ActivatedRoute) {
    this.idClient=this.activatedRoute.snapshot.params['id']
  }

  ngOnInit() {
    this.serviceClient.getClients(this.idClient).subscribe(
      (data:any)=>{
        this.client=data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )
  }

  onEditClient(){
    this.serviceClient.getUpdateClient(this.client).subscribe(
      data=>{
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )
  }
}
