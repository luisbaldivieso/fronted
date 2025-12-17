import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService, LoginResponse } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-from',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-from.html',
})
export class LoginFrom {
  correo: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.mensaje = '';

    this.auth.login(this.correo, this.password).subscribe({
      next: (resp: LoginResponse) => {
        this.mensaje = resp.mensaje;

        // Redirigir según tipo de usuario
        if (resp.usuario.tipo_usuario === 'admin') {
          this.router.navigate(['/admin']);
        } else if (resp.usuario.tipo_usuario === 'cliente') {
          this.router.navigate(['/usuario']);
        }
      },
      error: (err) => {
        this.mensaje = err.error?.message || 'Error al conectar con el servidor';
      },
    });
  }
}
