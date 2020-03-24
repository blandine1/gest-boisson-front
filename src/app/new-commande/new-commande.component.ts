import { Component, OnInit } from '@angular/core';
import {ServiceCommande} from '../commande/commandeService';
import {ServiceClient} from '../client/clientServive';
import {ModelClient} from '../client/clientModel';
import {ModelCommande} from '../commande/commandeModel';

@Component({
  selector: 'app-new-commande',
  templateUrl: './new-commande.component.html',
  styleUrls: ['./new-commande.component.css']
})
export class NewCommandeComponent implements OnInit {

  clientCi:ModelClient=new ModelClient();//clientCi c'est ce client
  clients:ModelClient[]=[];

  commande:ModelCommande=new ModelCommande();

  constructor(private serviceCommande:ServiceCommande, private serviceClient:ServiceClient) { }

  ngOnInit() {
    this.serviceClient.getClient().subscribe(
      (data:any)=>{
        this.clients=data;
      },
      error1 => {
         console.log(error1);
      }
    )
  }

  onSaveCommande(){
    this.commande.client=this.clientCi;
    this.serviceCommande.getOnSaveCommande(this.commande).subscribe(
      data=>{
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )
  }


}
