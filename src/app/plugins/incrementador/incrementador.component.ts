import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('inputProgress', {static: true}) inputProgress: ElementRef;
  @Input() progreso: number= 50;
  @Input() leyenda: string = 'leyenda';
  
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();  

  constructor() { }

  ngOnInit() {
  }
  disminuir(){
    if(this.progreso >0){
      this.progreso= this.progreso - 5;
      this.cambioValor.emit(this.progreso);
      this.inputProgress.nativeElement.focus();
    }
      
  }

  sumar(){
    if(this.progreso <100){
      this.progreso= this.progreso + 5;
      this.cambioValor.emit(this.progreso);
      this.inputProgress.nativeElement.focus();
    }
  }

  onChanges(valor: number){
    //let inputValor: any = document.getElementsByName('progreso')[0];

    if(valor>=100){
      this.progreso = 100;
    }else if(valor <=0){
      this.progreso = 0;
    }else{
      this.progreso = valor;
    }
    this.inputProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }
  

}
