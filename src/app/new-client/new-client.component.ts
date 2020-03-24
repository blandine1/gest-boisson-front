import { Component, OnInit } from '@angular/core';
import {ModelClient} from '../client/clientModel';
import {ServiceClient} from '../client/clientServive';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  client:ModelClient=new ModelClient();
  constructor( private serviceClient:ServiceClient) { }

  ngOnInit() {
  }

  onSaveClient(){
    this.serviceClient.getSaveClient(this.client).subscribe(
      data=>{
        console.log(data);
      },
      error1 => {
        console.log(error1)
      }
    )
  }

  onUpdateClient(){

  }
}
