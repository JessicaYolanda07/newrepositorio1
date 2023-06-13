import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  image:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Mi primer App Angular';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void {

    this.ArregloTarjetas = [
      {titulo:'Video 1', subtitulo: 'Subtituto video 1', image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"},
      {titulo:'Video 2', subtitulo: 'Subtituto video 2', image:"https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
      {titulo:'Video 3', subtitulo: 'Subtituto video 3', image:"https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_640.jpg"},
    ]
  }
}
