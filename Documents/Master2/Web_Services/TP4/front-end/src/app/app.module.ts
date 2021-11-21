import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {AddPhotoComponent} from "./add-photo/add-photo.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SeePhotoComponent } from './see-photo/see-photo.component';
import { DeletePhotoComponent } from './delete-photo/delete-photo.component';
import { ModifyPhotoComponent } from './modify-photo/modify-photo.component';


const appRoutes: Routes= [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path : 'add', component: AddPhotoComponent },
  {path : 'see', component: SeePhotoComponent},
  {path : 'delete', component: DeletePhotoComponent},
  {path : 'modify', component: ModifyPhotoComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    AddPhotoComponent,
    SeePhotoComponent,
    DeletePhotoComponent,
    ModifyPhotoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
