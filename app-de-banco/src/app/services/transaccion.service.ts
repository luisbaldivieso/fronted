import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detalle } from '../interfaces/detalle.interface';

@Injectable({ providedIn: 'root' })
export class DetalleService {
  private api = 'http://localhost:3000/detalles';

  constructor(private http: HttpClient) {}

  crearDetalle(detalle: Detalle): Observable<Detalle> {
    return this.http.post<Detalle>(this.api, detalle);
  }

  obtenerDetallesPorUsuario(usuarioId: string): Observable<Detalle[]> {
    return this.http.get<Detalle[]>(`${this.api}/usuario/${usuarioId}`);
  }
}
