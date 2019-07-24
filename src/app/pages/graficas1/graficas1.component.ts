import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {
  // Doughnut
  graficos: any = {
    'grafico1': {
      'label': ['Con frijoles', 'con natillia', 'con tocino'],
      'data': [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    'grafico2': {
      'label': ['Hombres','Mujeres'],
      'data': [4500,6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'label': ['Si','No'],
      'data': [95,5],
      'type': 'doughnut',
      'leyenda': '¿Les da gases los frijoles?'
    },
    'grafico4': {
      'label': ['No','Si'],
      'data': [85,15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le de gases?'
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
