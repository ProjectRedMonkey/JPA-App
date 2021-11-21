import { Component, OnInit } from '@angular/core';
import {Photo} from "../photo.type";
import {HttpClient} from "@angular/common/http";
import {defaultIfEmpty, filter} from "rxjs";

@Component({
  selector: 'app-see-photo',
  templateUrl: './see-photo.component.html',
  styleUrls: ['./see-photo.component.css']
})
export class SeePhotoComponent implements OnInit {
  photos: Photo[];

  constructor(private http: HttpClient) {
    this.photos = [];
  }

  ngOnInit(): void {
    this.http.get<Photo[]>("http://localhost:8080/Photos").pipe(
      filter((photo: Photo[]) => !!photo),
      defaultIfEmpty([])
    ).subscribe({ next: (photo: Photo[]) => this.photos = photo });
  }

}
