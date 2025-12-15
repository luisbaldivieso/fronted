import { Component } from '@angular/core';
import { ClienteNew } from '../../componets/cliente-new/cliente-new';

@Component({
  selector: 'page-cuenta-admin',
  imports: [ClienteNew],
  templateUrl: './cuenta-admin.html'
})
export class CuentaAdmin {}
