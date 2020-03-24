import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import {HttpClientModule} from '@angular/common/http';
import {ServiceFournisseur} from './fournisseur/fournisseurService';
import { NewFournisseurComponent } from './new-fournisseur/new-fournisseur.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { EditFournisseurComponent } from './edit-fournisseur/edit-fournisseur.component';
import { GammeComponent } from './gamme/gamme.component';
import { NewGammeComponent } from './new-gamme/new-gamme.component';
import {ServiceGamme} from './gamme/gammeService';
import { EditGammeComponent } from './edit-gamme/edit-gamme.component';
import { ClientComponent } from './client/client.component';
import { NewClientComponent } from './new-client/new-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import {ServiceClient} from './client/clientServive';
import { Format1Component } from './format1/format1.component';
import { NewFormat1Component } from './new-format1/new-format1.component';
import {ServiceFormat} from './format1/formatService';
import { ProduitComponent } from './produit/produit.component';
import { NewProduitComponent } from './new-produit/new-produit.component';
import {ServiceProduit} from './produit/produitService';
import { EditFormatComponent } from './edit-format/edit-format.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { ProduitFormatComponent } from './produit-format/produit-format.component';
import { EditProduitFormatComponent } from './edit-produit-format/edit-produit-format.component';
import {ServiceProduitFormat} from './produit-format/produitFormatService';
import { NewProduitFormatComponent } from './new-produit-format/new-produit-format.component';
import { CommandeComponent } from './commande/commande.component';
import { NewCommandeComponent } from './new-commande/new-commande.component';
import { EditCommandeComponent } from './edit-commande/edit-commande.component';
import {ServiceCommande} from './commande/commandeService';
import { ProduitFormatCommandeComponent } from './produit-format-commande/produit-format-commande.component';
import { EditProdFormatCommandeComponent } from './edit-prod-format-commande/edit-prod-format-commande.component';
import {ServicePFC} from './produit-format-commande/PFCservice';
import { LivraisonComponent } from './livraison/livraison.component';
import { NewLivraisonComponent } from './new-livraison/new-livraison.component';
import { EditLivraisonComponent } from './edit-livraison/edit-livraison.component';
import {ServiceLivraison} from './livraison/livraisonService';
import { NewProduitFormatCommandeComponent } from './new-produit-format-commande/new-produit-format-commande.component';
import { LivraisonProdFormatComponent } from './livraison-prod-format/livraison-prod-format.component';
import { NewLivraisonProdFormatComponent } from './new-livraison-prod-format/new-livraison-prod-format.component';
import { EditLivraisonProdFormatComponent } from './edit-livraison-prod-format/edit-livraison-prod-format.component';
import {ServiceLPF} from './livraison-prod-format/LPFService';
import { ContentenuComponent } from './contentenu/contentenu.component';
import { VenteComponent } from './vente/vente.component';
import {ServiceCommende} from './vente/commandeService';
import { AchatComponent } from './achat/achat.component';
import {ServiceAchat} from './achat/AchatService';

const routes:Routes=[
  {path:"fournisseur", component:FournisseurComponent},
  {path:"new-fournisseur", component:NewFournisseurComponent},
  {path:"edit-fournisseur/:id", component:EditFournisseurComponent},
  {path:"gammes",component:GammeComponent},
  {path:"new-gammes",component:NewGammeComponent},
  {path:"edit-gamme/:id",component:EditGammeComponent},
  {path:"client",component:ClientComponent},
  {path:"new-client",component:NewClientComponent},
  {path:"edit-client/:id",component:EditClientComponent},
  {path:"format",component:Format1Component},
  {path:"new-format",component:NewFormat1Component},
  {path:"produit",component:ProduitComponent},
  {path:"edit-produit/:id",component:EditProduitComponent},
  {path:"new-produit",component:NewProduitComponent},
  {path:"edit-format/:id",component:EditFormatComponent},
  {path:"produitFormat",component:ProduitFormatComponent},
  {path:"new-proformat",component:NewProduitFormatComponent},
  {path:"edit-produitFormat/:id",component:EditProduitFormatComponent},
  {path:"commande",component:CommandeComponent},
  {path:"new-commande",component:NewCommandeComponent},
  {path:"edit-commande/:id",component:EditCommandeComponent},
  {path:"prodFormatCommande",component:ProduitFormatCommandeComponent},
  {path:"edit-prodFormatCommande",component:EditProdFormatCommandeComponent},
  {path:"new-prodFormatCommande",component:NewProduitFormatCommandeComponent},
  {path:"livraison",component:LivraisonComponent},
  {path:"edit-livraison/:id",component:EditLivraisonComponent},
  {path:"new-livraison",component:NewLivraisonComponent},
  {path:"livrProdFormat",component:LivraisonProdFormatComponent},
  {path:"new-LPF",component:NewLivraisonProdFormatComponent},
  {path:"vente",component:VenteComponent},
  {path:"achat",component:AchatComponent},
  {path:"", redirectTo:"/fournisseur", pathMatch:"full"},
]

@NgModule({
  declarations: [
    AppComponent,
    FournisseurComponent,
    NewFournisseurComponent,
    EditFournisseurComponent,
    GammeComponent,
    NewGammeComponent,
    EditGammeComponent,
    ClientComponent,
    NewClientComponent,
    EditClientComponent,
    Format1Component,
    NewFormat1Component,
    ProduitComponent,
    NewProduitComponent,
    EditFormatComponent,
    EditProduitComponent,
    ProduitFormatComponent,
    EditProduitFormatComponent,
    ProduitFormatComponent,
    NewProduitFormatComponent,
    CommandeComponent,
    NewCommandeComponent,
    EditCommandeComponent,
    ProduitFormatCommandeComponent,
    EditProdFormatCommandeComponent,
    LivraisonComponent,
    NewLivraisonComponent,
    EditLivraisonComponent,
    NewProduitFormatCommandeComponent,
    LivraisonProdFormatComponent,
    NewLivraisonProdFormatComponent,
    EditLivraisonProdFormatComponent,
    ContentenuComponent,
    VenteComponent,
    AchatComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [ServiceFournisseur,
              ServiceGamme,
              ServiceClient,
              ServiceFormat,
              ServiceProduit,
              ServiceProduitFormat,
              ServiceCommande,
              ServicePFC,
              ServiceLivraison,
              ServiceLPF,
              ServiceCommende,
              ServiceAchat
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
