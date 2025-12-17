export interface Usuario {
  _id?: string;
  correo: string;
  password?: string;          // solo para login
  tipo_usuario: 'admin' | 'cliente';
  activo: boolean;
  fecha_creacion?: Date;
}
