import { Component } from '@angular/core';
import { SaldoCar } from '../../componets/saldo-car/saldo-car';
import { HistorialTransacciones } from '../../componets/historial-transacciones/historial-transacciones';

@Component({
  selector: 'page-cuenta-usuario',
  imports: [SaldoCar, HistorialTransacciones],
  templateUrl: './cuenta-usuario.html'
})
export class CuentaUsuario {}
