import { Component, OnInit } from '@angular/core';
import {ServiceClient} from '../client/clientServive';
import {ModelLivraison} from './livraisonModel';
import {ServiceLivraison} from './livraisonService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {

  livraison:ModelLivraison[]=[];
  constructor( private serviceLivraison:ServiceLivraison, private router:Router) { }

  ngOnInit() {
      this.searchLivraison();
  }

  searchLivraison(){
    this.serviceLivraison.getLivraisons().subscribe(
      (data:any)=>{
        this.livraison=data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    )
  }

  onEditLivraison(id:number){
    this.router.navigate(['edit-livraison',id])
  }

  onDeleteLivraison(){

  }


}
