import { Component } from '@angular/core';
import { ModalTransaccion } from '../modal-transaccion/modal-transaccion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-boton-transaccion',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalTransaccion],
  templateUrl: './boton-transaccion.html',
})
export class BotonTransaccion {
  modalVisible = false;

  // Datos de prueba
  cuentaOrigen = '1001-001';
  cuentaDestino = '';
  monto: number | null = null;

  abrirModal() {
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
  }

  realizarTransaccion() {
    if (!this.cuentaDestino || !this.monto) {
      alert('Por favor ingrese todos los datos');
      return;
    }

    alert(`Transacción realizada:\nDe: ${this.cuentaOrigen}\nA: ${this.cuentaDestino}\nMonto: $${this.monto}`);
    // Resetear formulario
    this.cuentaDestino = '';
    this.monto = null;
    this.cerrarModal();
  }
}
