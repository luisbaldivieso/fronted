import { Routes } from '@angular/router';
import { InicioDeSesion } from './Page/inicio-de-sesion/inicio-de-sesion';
import { CuentaUsuario } from './Page/cuenta-usuario/cuenta-usuario';
import { CuentaAdmin } from './Page/cuenta-admin/cuenta-admin';
import { Transaccion } from './Page/transaccion/transaccion';

export const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: InicioDeSesion },
	{ path: 'usuario', component: CuentaUsuario },
	{ path: 'admin', component: CuentaAdmin },
	{ path: 'transaccion', component: Transaccion },
];
