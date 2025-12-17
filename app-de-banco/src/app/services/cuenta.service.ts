import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cuenta {
  id?: string;
  idCliente: string;
  numeroCuenta: string;
  tipoCuenta: string;
  saldo: number;
  fecha_creacion?: string;
}

@Injectable({ providedIn: 'root' })
export class CuentaService {
  private api = 'http://localhost:3000/cuentas';


  constructor(private http: HttpClient) {}

  obtenerCuenta(id: string): Observable<Cuenta> {
    return this.http.get<Cuenta>(`${this.api}/${id}`);
  }

  listarCuentas(): Observable<Cuenta[]> {
    return this.http.get<Cuenta[]>(this.api);
  }

  crearCuenta(cuenta: Cuenta): Observable<Cuenta> {
    return this.http.post<Cuenta>(this.api, cuenta);
  }
}
