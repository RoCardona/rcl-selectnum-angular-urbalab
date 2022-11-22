import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectonumerico',
  templateUrl: './selectonumerico.component.html',
  styleUrls: ['./selectonumerico.component.css']
})
export class SelectonumericoComponent implements OnInit{

  @Input() minimo: any;
  @Input() maximo: any;
  actual: any;

  constructor() { }

  ngOnInit() {
    this.actual = this.minimo;
  }

  incrementar() {
    if (this.actual<this.maximo)
    this.actual++;
  }

  decrementar() {
    if (this.actual>this.minimo)
    this.actual--;
  }

  fijar(v:number) {
    if (v>=this.minimo && v<=this.maximo)
    this.actual=v;
  }
}
