import {Component, OnInit} from '@angular/core';
import {ServiceProduit} from '../produit/produitService';
import {ServiceFormat} from '../format1/formatService';
import {ServiceClient} from '../client/clientServive';
import {ModelClient} from '../client/clientModel';
import {ModelProduit} from '../produit/produitModel';
import {ModelFormat} from '../format1/formatModel';
import {LigneCommande} from './venteModel';
import {ServiceProduitFormat} from '../produit-format/produitFormatService';
import {ServicePFC} from '../produit-format-commande/PFCservice';
import {Commande} from './commandeModel';
import {ServiceCommende} from './commandeService';
import {ModelFacture} from './factureModel';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {

  //produit;
  produits: ModelProduit[] = [];

  //client;
  clients: ModelClient[] = [];

  //format;
  formats: ModelFormat[] = [];
 // i:number=0;


  ligneCommande:LigneCommande=new LigneCommande();
  listeLigneCommande:LigneCommande[]=[];

  //commende represente l'objet courrant different de l'objet deja créé
  commende:Commande=new Commande();
  facture:ModelFacture[]=[];

  constructor(private serviceProduit: ServiceProduit,
              private serviceFormat: ServiceFormat,
              private serviceClient: ServiceClient,
              private serviceProFormat:ServiceProduitFormat,
              private servicePFC:ServicePFC,
              private serviceCommande:ServiceCommende,
              ) {
  }

  ngOnInit() {
    this.serviceClient.getClient().subscribe(
      (data: any) => {
        this.clients = data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    );

    this.dosearchGCommande();

    this.serviceFormat.getFormats().subscribe(
      (data: any) => {
        this.formats = data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    );

    this.serviceProduit.onGetProduit().subscribe(
      (data: any) => {
        this.produits = data;
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    );
  }

  dosearchGCommande(){
    this.serviceCommande.onGetCommande().subscribe(
      (data:any)=>{
        this.facture=data;
        this.dosearchGCommande();
        console.log(data.date);
        console.log(data);
      },
      error1 => {
        console.log(error1);
      }
    );
  }


  ajoutCourant(){

    console.log(this.ligneCommande);
    this.listeLigneCommande.push(this.ligneCommande);
    this.ligneCommande=new LigneCommande();//initialisation
    this.prixTotal();
    this.conteId();
  }
  //compte le nombre d'element dans la liste.
  conteId(){
    for (let i=0; i<this.listeLigneCommande.length-1;i++){
      i=i++;
    }
  }

  //dans cette commande a chaque fois on vide la valeur contenue dans le #cePrixTotal puis grace a la boucle on rechrage les donnees
  //grace a la boucle
  prixTotal(){
   // console.log(this.commende);
    //console.log(this.commende.cePrixTotal);
    this.commende.cePrixTotal=0;
    //console.log(this.commende.cePrixTotal);
    for(let i=0; i<this.listeLigneCommande.length; i++ ){
      //console.log(this.listeLigneCommande[i].prixTotalPartielle);
      this.commende.cePrixTotal=this.listeLigneCommande[i].prixTotalPartielle+this.commende.cePrixTotal;
     // console.log(this.commende.cePrixTotal);

    }
  }


  chargePrixProFormat(){
    console.log(this.ligneCommande.produit);
    console.log(this.ligneCommande.format);
    if (this.ligneCommande.produit==null || this.ligneCommande.format==null ) {

    }else {
      this.serviceProFormat.getProduitIdFormatId(this.ligneCommande.produit.id,this.ligneCommande.format.id).subscribe(
        (data:any)=>{
          console.log(data);
          this.ligneCommande.prixUnitaire=data.prix;
        },
        error1 => {
          console.log(error1);
        }
      )
    }

  }

  calculPrixTotalPartielle(){
    this.ligneCommande.prixTotalPartielle=this.ligneCommande.prixUnitaire*this.ligneCommande.quantite;
  }

  delete(){

  }

  saveLigneCommande(){
    this.commende.listeLigneCommande=this.listeLigneCommande;
     this.serviceCommande.onSaveCommande(this.commende).subscribe(
       data=>{
         console.log(data);
         this.commende=new  Commande();
         this.listeLigneCommande=[];
       },
         error1 => {
         console.log(error1);
       },

     )
  }

}
