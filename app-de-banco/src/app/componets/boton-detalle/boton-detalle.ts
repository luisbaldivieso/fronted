import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDetallefrom } from '../modal-detallefrom/modal-detallefrom';

@Component({
  selector: 'app-boton-detalle',
  standalone: true,
  imports: [CommonModule, ModalDetallefrom],
  templateUrl: './boton-detalle.html',
})
export class BotonDetalle {
  showModal = false;

  abrirModal() {
    this.showModal = true;
  }

  cerrarModal() {
    this.showModal = false;
  }
}
