import { Component } from '@angular/core';
import { SaldoCar } from '../../componets/saldo-car/saldo-car';
import { HistorialTransacciones } from '../../componets/historial-transacciones/historial-transacciones';
import { BotonTransaccion } from '../../componets/boton-transaccion/boton-transaccion';
import { BotonDetalle } from '../../componets/boton-detalle/boton-detalle';
import { TarjetaBoton } from '../../componets/tarjeta-boton/tarjeta-boton';

@Component({
  selector: 'page-cuenta-usuario',
  imports: [SaldoCar, HistorialTransacciones, BotonTransaccion, BotonDetalle, TarjetaBoton],
  templateUrl: './cuenta-usuario.html'
})
export class CuentaUsuario {}
