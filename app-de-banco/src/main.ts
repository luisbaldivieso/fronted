import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// Si quieres habilitar producción
// enableProdMode();

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // permite inyectar interceptores HTTP
    importProvidersFrom(FormsModule),
    provideRouter(routes), // si tienes rutas definidas
  ]
})
  .then(() => console.log('Angular App bootstrapped!'))
  .catch(err => console.error(err));
