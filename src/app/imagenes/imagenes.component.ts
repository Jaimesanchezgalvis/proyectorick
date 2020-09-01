import { ImagenesService } from './imagenes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})

export class ImagenesComponent implements OnInit {


  Imagenes;

  constructor( protected ImagenesService: ImagenesService ) {
  }
  ngOnInit() {
    this.ImagenesService.getData().subscribe((res: any) => { // Success
      this.Imagenes = res.results;
      });
  }
}
