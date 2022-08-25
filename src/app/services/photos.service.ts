import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private url: string = "https://jsonplaceholder.typicode.com/photos";

  constructor(
    private http: HttpClient
  ) { }

  getPhotos(): Observable<any> {
    return this.http.get(this.url);
  }
}
