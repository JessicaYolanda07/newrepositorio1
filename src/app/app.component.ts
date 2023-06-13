import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?:number;
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
      {titulo:'Video 1', subtitulo: 'Subtituto video 1'},
      {titulo:'Video 2', subtitulo: 'Subtituto video 2'},
      {titulo:'Video 3', subtitulo: 'Subtituto video 3'},
    ]
  }
}
