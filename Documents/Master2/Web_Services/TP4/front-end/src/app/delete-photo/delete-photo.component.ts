import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-photo',
  templateUrl: './delete-photo.component.html',
  styleUrls: ['./delete-photo.component.css']
})
export class DeletePhotoComponent implements OnInit {

  constructor(private http: HttpClient, private routeur:Router) { }

  ngOnInit(): void {
  }

  deletePhoto() {
    var id = (<HTMLInputElement>document.getElementById("id")).value;
    this.http.delete("http://localhost:8080/Photos/"+id).subscribe({
      next: data => {
        console.log('Photo '+id+' supprimée');
      },
      error: error => {
        console.error('Cette photo n\'existe pas', error);
      }
    });
  }
}
