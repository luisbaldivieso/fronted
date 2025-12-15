import { Component } from '@angular/core';
import { ModalTarjeta } from '../modal-tarjeta/modal-tarjeta';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta-boton',
  standalone: true,
  imports: [CommonModule, ModalTarjeta],
  templateUrl: './tarjeta-boton.html'
})
export class TarjetaBoton {
  modalVisible = false;

  abrir() {
    this.modalVisible = true;
  }

  cerrar() {
    this.modalVisible = false;
  }
}
