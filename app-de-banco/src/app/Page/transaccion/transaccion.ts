import { Component } from '@angular/core';
import { TransaccionFrom } from '../../componets/transaccion-from/transaccion-from';

@Component({
  selector: 'page-transaccion',
  imports: [TransaccionFrom],
  templateUrl: './transaccion.html'
})
export class Transaccion {}
