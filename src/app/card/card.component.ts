import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  public image?:string;
  public Titulo:string="Curso de Angular con interpolacion";
  @Input() dataEntrante:any;
  constructor() { }

  ngOnInit(): void {
    this.image = "https://w7.pngwing.com/pngs/1005/600/png-transparent-identity-document-computer-icons-others-text-rectangle-identity-document-thumbnail.png";
  }
}