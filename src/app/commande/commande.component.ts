import { Component, OnInit } from '@angular/core';
import {ModelCommande} from './commandeModel';
import {ServiceCommande} from './commandeService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  commande:ModelCommande[]=[];
  constructor(private serviceCommande:ServiceCommande, private router:Router) {

  }

  ngOnInit() {
    this.serviceCommande.getCommandes().subscribe(
      (data:any)=>{
        this.commande=data;
        console.log(data)
      },
      error1 => {
        console.log(error1);
      }
    )
  }

  onEditCommande(id:number){
    this.router.navigate(['edit-commande',id])
  }

  onDeleteCommande(id:number){
    this.serviceCommande.getDeleteCommande(id).subscribe(
      data=>{
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )

  }

}
