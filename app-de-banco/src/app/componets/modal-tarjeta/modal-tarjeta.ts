import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-tarjeta',
  standalone: true,
  templateUrl: './modal-tarjeta.html'
})
export class ModalTarjeta {
  @Output() cerrar = new EventEmitter<void>();

  onCerrar() {
    this.cerrar.emit();
  }
}
