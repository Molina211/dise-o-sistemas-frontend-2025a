import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouteConfigLoadEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mostrarHeader = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.verificarRuta();
    });
  }

  verificarRuta() {
    const rutasOcultas = ['/pulidorojo', '/registro'];
    this.mostrarHeader = !rutasOcultas.includes(this.router.url);
  }
}
