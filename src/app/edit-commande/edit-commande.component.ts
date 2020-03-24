import { Component, OnInit } from '@angular/core';
import {ServiceCommande} from '../commande/commandeService';
import {ActivatedRoute} from '@angular/router';
import {ModelCommande} from '../commande/commandeModel';
import {ModelClient} from '../client/clientModel';
import {ServiceClient} from '../client/clientServive';

@Component({
  selector: 'app-edit-commande',
  templateUrl: './edit-commande.component.html',
  styleUrls: ['./edit-commande.component.css']
})
export class EditCommandeComponent implements OnInit {

  clientCi:ModelClient=new ModelClient();
  clients:ModelClient[]=[];
  commande:ModelCommande=new ModelCommande();
  idCommande;
  constructor( private serviceCommande:ServiceCommande,private serviceClient:ServiceClient,private activatedRoute:ActivatedRoute) {
     this.idCommande=this.activatedRoute.snapshot.params['id']
  }

  ngOnInit() {

    this.serviceClient.getClient().subscribe(
      (data:any)=>{
        this.clients=data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    );

    this.serviceCommande.getCommandeById(this.idCommande).subscribe(
      (data:any)=>{
        this.commande=data;
        console.log(data)
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
