export interface Cuenta {
  _id?: string;
  usuario_id: string;               // ObjectId → string
  nombre_cliente: string;
  correo: string;
  telefono: string;
  direccion: string;
  numero_cuenta: string;
  tipo_cuenta: 'ahorros' | 'corriente';
  saldo: number;
  tarjeta_estado: 'encendida' | 'apagada';
  fecha_creacion?: Date;
}
