export interface Transaccion {
  _id?: string;
  cuenta_origen: string;
  cuenta_destino?: string;
  monto: number;
  fecha?: Date;
  usuario_id: string;
}
