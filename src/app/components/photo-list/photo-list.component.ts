import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { PhotoComponent } from '../photo/photo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  
  photos: any;
  loading: boolean = false;

  constructor(
    private photosService: PhotosService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.photosService.getPhotos().subscribe(photos => {
      this.photos = photos;
      this.loading = false;
    });
  }

  openDialog(photo: any) {
    let dialogRef = this.dialog.open(PhotoComponent, {data: photo});
  }

}
