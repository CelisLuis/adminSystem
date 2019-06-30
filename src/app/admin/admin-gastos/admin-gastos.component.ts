import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-gastos',
  templateUrl: './admin-gastos.component.html',
  styleUrls: ['./admin-gastos.component.scss']
})
export class AdminGastosComponent implements OnInit {

  nuevoGasto: object = {
    fecha: '01-01-1990',
    tipo: 'agua',
    cantidad: 0
  }

  gastos: any = [];

  constructor() { }

  ngOnInit() {
  }

  guardarGasto ( ) {
    
  }

}

