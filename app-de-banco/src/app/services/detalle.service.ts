import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transaccion {
  id?: string;
  cuentaOrigen: string;
  cuentaDestino: string;
  monto: number;
  fecha?: string;
  tipo?: string; // ej: "transferencia", "deposito", "retiro"
}

@Injectable({ providedIn: 'root' })
export class TransaccionService {
  private api = 'http://localhost:3000/api/transacciones';

  constructor(private http: HttpClient) {}

  crearTransaccion(transaccion: Transaccion): Observable<Transaccion> {
    return this.http.post<Transaccion>(this.api, transaccion);
  }

  historial(cuentaId: string): Observable<Transaccion[]> {
    return this.http.get<Transaccion[]>(`${this.api}/historial/${cuentaId}`);
  }
}
