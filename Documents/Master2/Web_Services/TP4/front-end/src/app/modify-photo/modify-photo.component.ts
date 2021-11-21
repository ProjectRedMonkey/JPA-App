import { Component, OnInit } from '@angular/core';
import {Photo} from "../photo.type";
import {defaultIfEmpty, filter} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-modify-photo',
  templateUrl: './modify-photo.component.html',
  styleUrls: ['./modify-photo.component.css']
})
export class ModifyPhotoComponent implements OnInit {
  photo: Photo;
  print:boolean;
  id:string;

  constructor(private http: HttpClient) {
    this.photo = {} as Photo;
    this.print = false;
    this.id = "0";
  }

  ngOnInit(): void {
  }

  modify(photo: Photo) {
    this.http.put("http://localhost:8080/Photos/"+this.id, photo).subscribe({
      next: data => {
        console.log('Photo '+photo.nomPhoto+' modifiée');
      },
      error: error => {
        console.error('Cette photo n\'existe pas', error);
      }
    });
  }

  printForm() {
    this.id = (<HTMLInputElement>document.getElementById("id")).value;
    this.http.get<Photo>("http://localhost:8080/Photos/"+this.id).pipe(
      filter((photo: Photo) => !!photo),
      defaultIfEmpty({} as Photo)
    ).subscribe({ next: (p: Photo) => this.photo = p });
    if(!!this.photo.nomPhoto) {
      this.print = true;
    }
  }
}
