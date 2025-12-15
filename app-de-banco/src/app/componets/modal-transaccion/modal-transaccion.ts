import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-transaccion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-transaccion.html'
})
export class ModalTransaccion {
  @Input() cuentaOrigen: string = '';
  cuentaDestino: string = '';
  monto: number | null = null;

  @Output() cancelar = new EventEmitter<void>();
  @Output() enviar = new EventEmitter<{ destino: string; monto: number }>();

  onCancelar() {
    this.cancelar.emit();
  }

  onEnviar() {
    if (!this.cuentaDestino || !this.monto) {
      alert('Por favor ingrese todos los datos');
      return;
    }
    this.enviar.emit({ destino: this.cuentaDestino, monto: this.monto });
    this.cuentaDestino = '';
    this.monto = null;
  }
}
