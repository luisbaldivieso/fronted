import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteNew } from '../../componets/cliente-new/cliente-new';
import { ModalFromcreaus } from '../../componets/modal-fromcreaus/modal-fromcreaus';

@Component({
  selector: 'page-cuenta-admin',
  imports: [CommonModule, ClienteNew, ModalFromcreaus],
  templateUrl: './cuenta-admin.html'
})
export class CuentaAdmin {
  abrirModalCuenta = false;

  abrirModal() {
    this.abrirModalCuenta = true;
  }

  cerrarModal() {
    this.abrirModalCuenta = false;
  }
}

