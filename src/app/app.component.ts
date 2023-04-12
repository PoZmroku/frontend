import { Component } from '@angular/core';
import { UserService } from './services';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-login></app-login>
  `
})
export class AppComponent {
  title = 'frontend';

  constructor() {
  }
}
