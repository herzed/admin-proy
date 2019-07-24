import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progreso: number = 50;
  progreso2: number = 50;
  constructor() { }

  ngOnInit() {
  }

  actualizar(valor){
    this.progreso = valor;
  }

  actualizar2(valor){
    console.log(valor);
    this.progreso2 = valor;
  }
  
}
