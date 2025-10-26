import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <nav class="navbar navbar-dark bg-dark px-3">
    <a class="navbar-brand" href="#">Travlr Admin</a>
  </nav>
  <div class="container my-3">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {}
