import { Component, OnInit } from '@angular/core';
import {Photo} from '../photo.type';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  constructor(private http: HttpClient, private routeur: Router) { }

  ngOnInit(): void {
  }

  add(photo:Photo){
    this.http.post("http://localhost:8080/Photos", photo).subscribe({
      next: data => {
        console.log('Photo ajoutée');
      },
      error: error => {
        console.error('Il y a eu une erreur :', error);
      }
    });
  }
}
