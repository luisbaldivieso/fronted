import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

import { Heder } from './componets/heder/heder';

@Component({
  selector: 'app-root',
  imports: [Heder,RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('app-de-banco');
}
