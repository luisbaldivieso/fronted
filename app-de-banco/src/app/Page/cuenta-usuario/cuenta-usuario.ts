import { Component } from '@angular/core';
import { SaldoCar } from '../../componets/saldo-car/saldo-car';
import { HistorialTransacciones } from '../../componets/historial-transacciones/historial-transacciones';
import { BotonTransaccion } from '../../componets/boton-transaccion/boton-transaccion';

@Component({
  selector: 'page-cuenta-usuario',
  imports: [SaldoCar, HistorialTransacciones, BotonTransaccion ],
  templateUrl: './cuenta-usuario.html'
})
export class CuentaUsuario {}
