import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-detallefrom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-detallefrom.html',
})
export class ModalDetallefrom {
  @Input() visible = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
